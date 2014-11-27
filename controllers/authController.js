/**
 * Created by myoung on 27/11/2014.
 */
// api/controllers/authController.js

var passport = require('passport');

var AuthController = function () {};

AuthController.prototype.login = function (req,res)
{
    res.render("login", { title: "Login to The Board", message: req.flash("loginError") });
};

AuthController.prototype.process = function(req, res)
    {
        passport.authenticate('local', function(err, user, info)
        {
            if ((err) || (!user))
            {
                res.redirect('/login');
                return;
            }

            req.logIn(user, function(err)
            {
                if (err)
                {
                    res.render("login", { title: "Login to The Board", message: req.flash("loginError") });
                    return;
                }

                res.redirect('/');
                return;
            });
        })(req, res);
    };

AuthController.prototype.logout = function (req,res)
    {
        req.logout();
        res.redirect('/');
    };

module.exports = AuthController;