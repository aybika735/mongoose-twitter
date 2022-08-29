const {Router} = require('express');
const {commentcontroller} = require('../controllers/comments.controller');
const router = Router();


router.post('/comments', commentcontroller.createComment);

router.delete('/comments/:id', commentcontroller.deleteCommentById);

router.patch('/comments/:id', commentcontroller.changeCommentById);
router.get('/comments/:id', commentcontroller.getCommentsbyUser);
router.get('/comments', commentcontroller.getComments);


module.exports = router;