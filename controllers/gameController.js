(function(gameController) {

    var data = require("../data");

    gameController.init = function(app) {
        app.get("/game/:id", function(req, res) {
            data.getGame(req.params.id,function(err,results){
                res.render("game", {
                    title: "Welcome back to your game",
                    error: err,
                    game: results
                });
            })
        });
    };
})(module.exports);