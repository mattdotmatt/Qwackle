/**
 * Created by myoung on 23/10/14.
 */
var Game = require('../../services/game');

describe('When playing a move', function () {
    var game;

    before(function () {
        game = new Game('Kerry','Julie');
    });

    it('it should be Kerrys turn', function () {
        var result = game.turn;
        expect(result).equal('Kerry');
    });

});
