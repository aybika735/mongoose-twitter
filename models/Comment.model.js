const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: String,
  
  commentator:  {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;