/**
 * Created by myoung on 22/10/14.
 */
(function (controllers) {

    var homeController = require("./homeController");
    var gameController = require("./gameController");

    controllers.init = function (app){
        homeController.init(app);
        gameController.init(app);
    }
})(module.exports);
