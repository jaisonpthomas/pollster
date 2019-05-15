const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  title: String,
  body: String,
  subjeect: String,
  recipients: [
    {
      email: String,
      responded: { type: Boolean, default: false }
    }
  ],
  Republican: {
    type: Number,
    default: 0
  },
  Democrat: {
    type: Number,
    default: 0
  }
});

mongoose.model("surveys", surveySchema);
