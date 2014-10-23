(function(homeController) {
    homeController.init = function(app) {
        app.get("/", function(req, res) {
            res.render("index", { title: "Another12" });
        });
    };
})(module.exports);