var games = require('../services/games');

var HomeController = function () {};

HomeController.prototype.home = function(req, res) {
    games.getMyGames(req.user,function(err,results){
        res.render("index", {
            title: "Games",
            error: err,
            games: results,
            user: req.user
        });
    })
};

module.exports = HomeController;

/*
 app.post("/newGame", function (req,res){
 var gameName = req.body.gameName;
 game = new Game(gameName, ['Kerry', 'Julie']);
 data.createNewGame(game, function(err){
 if (err){
 console.log(err);
 }
 res.redirect("/");
 });
 });
 */