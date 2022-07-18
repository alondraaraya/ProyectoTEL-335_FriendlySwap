const router = require('express').Router();

const apiRouter = require('./api')

router.use('/api', apiRouter);
// router.use('/users', require('./users.route'));


module.exports = router;