/**
 * Created by myoung on 24/11/2014.
 */

var HomeController = require("./controllers/homeController");
var GameController = require("./controllers/gameController");
var AuthController = require("./controllers/authController");
var RegisterController = require("./controllers/registerController");
var auth = require("./auth");

module.exports = function (app) {

    var homeController = new HomeController();
    var gameController = new GameController();
    var authController = new AuthController();
    var registerController = new RegisterController();

    app.get('/', homeController.home);
    app.post('/new/', auth.ensureAuthenticated, homeController.newGame);
    app.get('/game/:id', auth.ensureAuthenticated, gameController.game);
    app.get("/login", authController.login);
    app.post("/login", authController.process);
    app.get("/register", registerController.getRegister);
    app.post("/register", registerController.register);
};