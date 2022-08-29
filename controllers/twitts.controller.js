const Twitt = require('../models/Twitt.model');

module.exports.twittcontroller = {
    createTwitt: async function(req, res){
        try{
             await Twitt.create({
            title: req.body.title,
            text:req.body.text,
            likes: req.body.likes,
            comments: req.body.comments,

        });
        res.json("Пост добавлен");
        }catch(error){
            console.log(error.toString())
        }
       
    },
    deleteTwittById: async function (req, res){
        try{
            const twitt = await Twitt.findByIdAndRemove(req.params.id)
       res.json("Пост удален");
       }catch(error){
   
           console.log(error.toString())
       }
    },
    changeTwittById:async function(req, res){
        try{
            const twitt = await Twitt.findByIdAndUpdate(req.params.id,{
       title: req.body.title, 
       text: req.body.text,
            })
        res.json('Пост изменен')
        }catch(error){
            console.log(error.toString())
        }
    },
    addlike:async function(req, res){
        try{
            const like = await Twitt.findByIdAndUpdate(req.params.id,{
       
       $push: {
        likes: req.body.likes
       },
       
       })
        res.json("Лайк добавлен")
        }catch(error){
            console.log(error.toString())
        }
    },
    addComments:async function(req, res){
        try{
            const comment = await Twitt.findByIdAndUpdate(req.params.id,{
       
                $push: {
                    comments: req.body.comments
                   },
       
       })
        res.json("Комментарий добавлен")
        }catch(error){
            console.log(error.toString())
        }




    },
       
    getTwittbyId: async(req, res)=>{
        try{
             const twitt = await Twitt.findById(req.params.id).populate(['comments', 'likes']);
        res.json(twitt);
        }catch(error){
            console.log(error.toString());
        }
       
    },
    getTwitts: async(req, res)=>{
        try{
             const twitts = await Twitt.find();
        res.json(twitts);
        }catch(error){
            console.log(error.toString());
        }
       
    },
    // addLike: async (req, res) => {
    //     try {
    //         await Post.findByIdAndUpdate(req.params.id, {
    //             $push: {
    //                 likes: req.body.likes
    //             },
    //         })
    //         res.json('Лайк добавлен')
    //     } catch (e) {
    //         console.log('Ошибка при добавлении лайка');
    //     }
    // }
}