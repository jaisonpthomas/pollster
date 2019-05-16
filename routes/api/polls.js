const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");

const Poll = mongoose.model("polls");
const Mailer = require("../../services/Mailer");
const emailTempalte = require("../../services/emailTemplate");

const requireLogin = require("../../middleware/requireLogin");
const requireCredits = require("../../middleware/requireCredits");

router.get("/thanks", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../services/thankYou.html"));
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
    await poll.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  } catch (err) {
    res.status(422).send(err);
    console.log(err);
  }
});

module.exports = router;
