const {Router} = require('express');
const {twittcontroller} = require('../controllers/twitts.controller')
const router = Router();


router.post('/twitts', twittcontroller.createTwitt);

router.delete('/twitts/:id', twittcontroller.deleteTwittById);

router.patch('/twitts/:id', twittcontroller.changeTwittById);
router.patch("/twitts/likes/:id", twittcontroller.addlike);
router.patch("/twitts/comments/:id", twittcontroller.addComments);
router.get('/twitts/:id', twittcontroller.getTwittbyId);
router.get('/twitts', twittcontroller.getTwitts);


module.exports = router;