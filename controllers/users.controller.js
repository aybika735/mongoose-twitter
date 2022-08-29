const User = require('../models/User.model');

module.exports.usercontroller = {
    createUser: async function(req, res){
        try{
             await User.create({
            name: req.body.name,
            saves:req.body.saves,
            twitts: req.body.twitts,
           

        });
        res.json("Пользователь добавлен");
        }catch(error){
            console.log(error.toString())
        }
       
    },

    deleteUserById: async function (req, res){
        try{
            const post = await User.findByIdAndRemove(req.params.id)
       res.json("Пользователь удален");
       }catch(error){
   
           console.log(error.toString())
       }
    },
    changeUserById:async function(req, res){
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
        name: req.body.name, 
        $push: {
        saves: req.body.saves
       },
        twitts: req.body.twitts
       
            })
        res.json('Пользователь изменен')
        }catch(error){
            console.log(error.toString())
        }


    },
    getUserbyId: async(req, res)=>{
        try{
             const user = await User.findById(req.params.id).populate(['saves', 'twitts']);
        res.json(user);
        }catch(error){
            console.log(error.toString());
        }
       
    },
    getUsers: async(req, res)=>{
        try{
             const users = await User.find().populate('twitts');
        res.json(users);
        }catch(error){
            console.log(error.toString());
        }
       
    },


}