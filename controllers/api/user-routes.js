const router = require('express').Router();
const {
    Blogger
} = require('../../models');

// CREATE new blogger
router.post('/', async (req, res) => {
    try {
        const dbUserData = await Blogger.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        console.log("newBlogger: ", dbUserData);

        req.session.save(() => {
            req.session.blogger_id = dbUserData.id;
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await Blogger.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({
                    message: 'Incorrect email or password. Please try again!'
                });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({
                    message: 'Incorrect email or password. Please try again!'
                });
            return;
        }

        req.session.save(() => {
            req.session.blogger_id = dbUserData.id;
            req.session.loggedIn = true;

            res
                .status(200)
                .json({
                    blogger: dbUserData,
                    message: 'You are now logged in!'
                });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;