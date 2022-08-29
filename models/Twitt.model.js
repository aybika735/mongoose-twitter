const mongoose = require("mongoose");

const twittSchema = mongoose.Schema({
  title: String,
  text: String,
  likes:  [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  }],
  comments: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Comments",
  }]


});

const Twitt = mongoose.model('Twitt', twittSchema);

module.exports = Twitt;