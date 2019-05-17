const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const _ = require("lodash");
const PathParser = require("path-parser").default;
const { URL } = require("url");

const Poll = mongoose.model("polls");
const Mailer = require("../../services/Mailer");
const emailTempalte = require("../../services/emailTemplate");
const requireLogin = require("../../middleware/requireLogin");
const requireCredits = require("../../middleware/requireCredits");

router.get("/", requireLogin, async (req, res) => {
  const polls = await Poll.find({ _user: req.user.id }).select("-recipients");
  res.send(polls);
});

router.post("/", requireLogin, requireCredits, async (req, res) => {
  const { election, repCandidate, demCandidate, recipients } = req.body;
  const parsedRecipients = recipients
    .split(",")
    .map(recip => ({ email: recip.trim() }));

  const poll = new Poll({
    election,
    repCandidate,
    demCandidate,
    recipients: parsedRecipients,
    _user: req.user.id,
    dateSent: Date.now()
  });

  const mailer = new Mailer(poll, emailTempalte(poll));

  try {
    await mailer.send();
    const savedPoll = await poll.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send({ user, poll: savedPoll });
  } catch (err) {
    res.status(422).send(err);
    console.log(err);
  }
});

router.get("/:pollId/:choice", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../services/thankYou.html"));
});

router.post("/webhooks", (req, res) => {
  const pathMatch = new PathParser("/api/polls/:pollId/:choice");

  _.chain(req.body)
    .map(({ email, url }) => {
      const match = pathMatch.test(new URL(url).pathname);
      if (match) return { email, pollId: match.pollId, choice: match.choice };
    })
    .compact()
    .uniqBy("email", "pollId")
    .each(({ email, pollId, choice }) => {
      const choiceKey = choice === "dem" ? "demVotes" : "repVotes";
      Poll.updateOne(
        {
          _id: pollId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        },
        {
          $inc: { [choiceKey]: 1 },
          $set: { "recipients.$.responded": true },
          lastResponded: new Date()
        }
      ).exec();
    })
    .value();
  res.send({});
});

module.exports = router;
