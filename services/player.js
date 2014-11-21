/*
 * Created by myoung on 23/10/14.
 */
var Player = function (playerName, playerPosition) {
    this.name = playerName;
    this.playerPosition = playerPosition;
    this.tiles = new Array(6);
    this.score = 0;
    this.turn = false;
};

module.exports = Player;