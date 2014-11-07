/**
 * Created by myoung on 23/10/14.
 */
var Game = require('../../services/game');

describe('Scoring the game', function () {

    it('after the first turn, the score is the number of tiles placed', function () {
        var game = new Game('Game Name', 'Kerry', 'Julie');
        game.placeTiles('Kerry',['tile1','tile2']);
        expect(game.players.player1.score).equal(2);
    });

    it('after the first turn, 6 tiles that arent a qwirkle are played, the score is 6', function () {
        var game = new Game('Game Name', 'Kerry', 'Julie');
        game.placeTiles('Kerry',['tile1','tile2','tile3','tile4','tile5','tile6']);
        expect(game.players.player1.score).equal(6);
    });
/*
    it('after the first turn, a qwirkle is played, the score is 12', function () {
        var game = new Game('Kerry', 'Julie');
        game.placeTiles('Kerry',['tile1','tile2','tile3','tile4','tile5','tile6']);
        expect(game.players.player1.score).equal(12);
    });
    */
});