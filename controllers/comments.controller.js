const Comment = require('../models/Comment.model');

module.exports.commentcontroller = {
    createComment: async function(req, res){
        try{
             await Comment.create({
            text: req.body.text,
            commentator:req.body.commentator,
          

        });
        res.json("Комментарий добавлен");
        }catch(error){
            console.log(error.toString())
        }
       
    },
    deleteCommentById: async function (req, res){
        try{
            const comment = await Comment.findByIdAndRemove(req.params.id)
       res.json("Комментарий удален");
       }catch(error){
   
           console.log(error.toString())
       }
    },
    changeCommentById:async function(req, res){
        try{
            const comment = await Comment.findByIdAndUpdate(req.params.id,{
       
        text: req.body.text,
        commentator: req.body.commentator
       
            })
        res.json('Комментарий изменен')
        }catch(error){
            console.log(error.toString())
        }




    },
    getCommentsbyUser: async(req, res)=>{
        try{
             const comment = await Comment.findById(req.params.id).populate('text');
        res.json(comment);
        }catch(error){
            console.log(error.toString());
        }
       
    },
    getComments: async(req, res)=>{
        try{
             const comments = await Comment.find();
        res.json(comments);
        }catch(error){
            console.log(error.toString());
        }
       
    }
}