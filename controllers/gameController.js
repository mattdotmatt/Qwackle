
var games = require('../services/games');

var GameController = function () {};

GameController.prototype.game = function(req, res) {
    games.getMyGame(req.user,req.params.id,function(err,results){
        res.render("game", {
            title: "Welcome back to your game",
            error: err,
            game: results
        });
    })
};

module.exports = GameController;