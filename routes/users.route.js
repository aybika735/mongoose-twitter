const {Router} = require('express');
const {usercontroller} = require('../controllers/users.controller')
const router = Router();


router.post('/users', usercontroller.createUser);

router.delete('/users/:id', usercontroller.deleteUserById);

router.patch('/users/:id', usercontroller.changeUserById);
router.get('/users/:id',usercontroller.getUserbyId);
router.get('/users', usercontroller.getUsers);


module.exports = router;