/*
 * Created by myoung on 23/10/14.
 */

var Player = require('../services/player');
var Score = require('../services/score');

var Game = function (gameName, players) {
    this.name = gameName;
    this.tiles = new Array(96);
    this.players = mapPlayers(players);
    this.turn = currentTurn(this.players);
};

var mapPlayers = function(players){
    var gamePlayers= new Array();
    for(var i=0;i<players.length;i++){
        gamePlayers.push(new Player(players[i],i));
    };
    gamePlayers[0].turn = true;
    return gamePlayers;
};

var currentTurn = function currentTurn(players){
    var current = null;
    players.forEach(function (item){
        if(item.turn==true) current = item;
    });
    return current;
};

function giveNextPlayerTurn() {
    var nextPlayerPosition = this.turn.playerPosition+1;
    if(nextPlayerPosition >= this.players.length) nextPlayerPosition=0;
    this.turn = this.players[nextPlayerPosition];
};

Game.prototype.placeTiles = function(player, tiles) {

    if(player != this.turn.name) return {moveWasOk:false};

    var scoringEngine = new Score();
    this.turn.score = scoringEngine.calculateScore(tiles);

    giveNextPlayerTurn.call(this);

    return {moveWasOk:true};

};

module.exports = Game;