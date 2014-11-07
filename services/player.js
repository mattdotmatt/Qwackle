/*
 * Created by myoung on 23/10/14.
 */
var Player = function (playerName) {
    this.name = playerName;
    this.tiles = new Array(6);
    this.score = 0;
};

module.exports = Player;