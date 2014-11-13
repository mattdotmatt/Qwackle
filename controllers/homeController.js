(function(homeController) {

    var data = require("../data");
    var Game = require('../services/game');

    homeController.init = function(app) {

        app.get("/", function(req, res) {
            data.getGames(function(err,results){
                res.render("index", {
                    title: "Games",
                    error: err,
                    games: results,
                    user: req.user
                });
            })
        });

        app.post("/newGame", function (req,res){
            var gameName = req.body.gameName;
            game = new Game(gameName, 'Kerry', 'Julie');
            data.createNewGame(game, function(err){
                if (err){
                    console.log(err);
                }
                res.redirect("/");
            });
        });
    };
})(module.exports);