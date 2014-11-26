/**
 * Created by myoung on 24/11/2014.
 */

var HomeController = require("./controllers/homeController");

module.exports = function (app) {

    var homeController = new HomeController();
    app.get('/', homeController.home);

};