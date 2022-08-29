const { Router } = require('express');
const router = Router();

router.use(require('./twitts.route'));
router.use(require('./users.route'));
router.use(require('./comments.route'));



module.exports = router;