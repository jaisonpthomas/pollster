const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  election: String,
  repCandidate: String,
  demCandidate: String,
  recipients: [
    {
      email: String,
      responded: { type: Boolean, default: false }
    }
  ],
  repVotes: {
    type: Number,
    default: 0
  },
  demVotes: {
    type: Number,
    default: 0
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("polls", pollSchema);
