/**
 * Created by myoung on 27/11/2014.
 */
var data = require("../data");
var hasher = require("../auth/hasher");

var RegisterController = function(){};

RegisterController.prototype.getRegister = function(req,res){
    res.render("register", { title: "Register for The Board", message: req.flash("registrationError") });
};

RegisterController.prototype.register = function(req,res){
    var salt = hasher.createSalt();

    var user = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        passwordHash: hasher.computeHash(req.body.password, salt),
        salt: salt
    };

    data.addUser(user, function (err) {
        if (err) {
            req.flash("registrationError", "Could not save user to database.");
            res.redirect("/register");
        } else {
            res.redirect("/login");
        }
    });
};

module.exports = RegisterController;