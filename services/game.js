/*
 * Created by myoung on 23/10/14.
 */

var Player = require('../services/player');
var Score = require('../services/score');

var Game = function (gameName, player1Name, player2Name) {

    this.name = gameName,
    this.tiles = new Array(96);
    this.players = {
        player1: new Player(player1Name),
        player2: new Player(player2Name)
    };
    this.turn = this.players.player1;
};

Game.prototype.placeTiles = function(player, tiles) {
    if(player != this.turn.name) return {moveWasOk:false};

    var scoringEngine = new Score();
    this.turn.score = scoringEngine.calculateScore(tiles);

    if(this.turn.name == 'Kerry'){
        this.turn = this.players.player2;
    } else {
        this.turn = this.players.player1;
    }
    return {moveWasOk:true};

};

module.exports = Game;