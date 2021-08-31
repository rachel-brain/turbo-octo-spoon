const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogpostRoutes = require('./blogpost-routes');

router.use('/bloggers', userRoutes);
router.use('/blogposts', blogpostRoutes);

module.exports = router;