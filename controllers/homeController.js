(function(homeController) {

    var data = require("../data");

    homeController.init = function(app) {

        app.get("/", function(req, res) {
            data.getGames(function(err,results){
                res.render("index", {
                    title: "Games",
                    error: err,
                    games: results
                });
            })
        });

        app.post("/newGame", function (req,res){
            var gameName = req.body.gameName;
            data.createNewGame(gameName, function(err){
                if (err){
                    console.log(err);
                }
                res.redirect("/");
            });
        });
    };
})(module.exports);