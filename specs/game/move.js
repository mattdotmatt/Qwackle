/**
 * Created by myoung on 23/10/14.
 */
var Game = require('../../services/game');

describe('When playing a move', function () {
    var game;

    before(function () {
        game = new Game('Kerry','Julie');
    });

    it('initially, it should be Kerrys turn', function () {
        var result = game.turn;
        expect(result).equal('Kerry');
    });

    it('after Kerrys turn, it should be Julies turn', function () {
        game.placeTiles('Kerry',['tile1','tile2']);
        var result = game.turn;
        expect(result).equal('Julie');
    });

    it('after Julies turn, it should be Kerrys turn again', function () {
        game.placeTiles('Julie',['tile1','tile2']);
        var result = game.turn;
        expect(result).equal('Kerry');
    });

    it('if it is Kerrys turn, Julie cannot play', function () {
        game.turn = 'Kerry';
        var result = game.placeTiles('Julie',['tile1','tile2']);
        var currentPlayer = game.turn;

        expect(result.moveWasOk).equal(false);
        expect(currentPlayer).equal('Kerry');
    });

});
