const withAuth = (req, res, next) => {
    // If the blogger is not logged in, redirect the request to the login route
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;