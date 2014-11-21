/**
 * Created by myoung on 23/10/14.
 */
var Game = require('../../services/game');

describe('When starting the game', function () {

    var game;

    before(function () {
        game = new Game('Game Name', ['Kerry', 'Julie', 'Someone Else']);
    });

    it('there should be 96 tiles', function () {
        var result = game.tiles;
        expect(result.length).equal(96);
    });

    it('there should be a player called Kerry and a player called Julie', function () {
        var result = game.players;
        expect(result[0].name).equal('Kerry');
        expect(result[1].name).equal('Julie');
        expect(result[2].name).equal('Someone Else');
    });

    it('everyone should have 6 tiles', function () {
        var result = game.players;
        expect(result[0].tiles.length).equal(6);
        expect(result[1].tiles.length).equal(6);
        expect(result[2].tiles.length).equal(6);
    });

    it('it should be Kerrys turn', function () {
        var result = game.turn;
        expect(result.name).equal('Kerry');
    });

});
