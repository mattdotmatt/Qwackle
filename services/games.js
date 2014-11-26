/**
 * Created by myoung on 19/11/2014.
 */
var data = require('../data');

var Games = function () {};

Games.prototype.getMyGames = function(player, next) {
    data.getGames(player, next);
};

Games.prototype.getMyGame = function(id, next) {
    data.getGame(id, next);
};

module.exports = new Games();

