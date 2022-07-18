const router = require('express').Router();
const userValidator = require('../../middleware/userValidator'); // Midelware validator

router.use('/login', require('./login.router'));
router.use('/posts', userValidator, require('./posts.router'));
router.use('/users', require('./users.router'));
router.use('/ofertas', require('./ofertas.router'));


module.exports = router;