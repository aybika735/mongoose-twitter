const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  saves:  [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Twitt",
  }],
  twitts:  {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Twitt",
  },
 


});

const User = mongoose.model('User', userSchema);

module.exports = User;