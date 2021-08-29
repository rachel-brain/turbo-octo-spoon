const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/bloggers', userRoutes);

module.exports = router;