(function(gameController) {
    gameController.init = function(app) {
        app.get("/game/", function(req, res) {
            res.render("game", { title: "A new game!" });
        });
    };
})(module.exports);