var games = require('../services/games');

var HomeController = function () {};

HomeController.prototype.home = function(req, res) {
    games.getMyGames(req.user, function (err, results) {
        res.render("index", {
            title: "Games",
            error: err,
            games: results,
            user: req.user
        });
    })
};

HomeController.prototype.newGame = function(req, res) {
    games.newGame (function (req,res) {
        var gameName = req.body.gameName;
        var player1 = new Player(req.user,0);
        var player2 = new Player('Kerry',1);
        var players = [player1,player2];
        game = new Game(gameName, players);
        data.createNewGame(game, function (err) {
            if (err) {
                console.log(err);
            }
            res.redirect("/");
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