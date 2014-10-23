/**
 * Created by myoung on 23/10/14.
 */
var Game = require('../services/game');

describe('When starting the game', function () {
    var game;

    before(function () {
        game = new Game();
    });

    it('there should be 108 tiles', function () {
        var result = game.start();
        expect(result).equal(1);
    });
});
