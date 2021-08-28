const router = require('express').Router();
const {
    Blogpost,
    Blogger
} = require('../models');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
    try {
        const dbBlogpostData = await Blogpost.findAll({
            include: [{
                model: Blogger,
                attributes: ['id', 'username']
            }, ],
        });

        const blogs = dbBlogpostData.map((blogpost) =>
            blogpost.get({
                plain: true
            })
        );

        res.render('homepage', {
            blogposts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one blogpost by id
router.get('/blogposts/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        // If the user is logged in, allow them to view the full blogpost library
        try {
            const dbBlogpostData = await Blogpost.findByPk(req.params.id, {
                include: [{
                    model: Blogger,
                    attributes: ['id', 'username']
                }, ],
            });
            const blogpost = dbBlogpostData.get({
                plain: true
            });
            res.render('blogpost', {
                blogpost,
                loggedIn: req.session.loggedIn
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

// GET all blogposts by blogger id
router.get('/blogger/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        // If the user is logged in, allow them to view the painting
        try {
            const blogpost = dbBlogpostData.get({
                plain: true
            });
            res.render('blogpost', {
                blogpost,
                loggedIn: req.session.loggedIn
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;