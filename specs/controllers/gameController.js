/**
 * Created by myoung on 21/11/2014.
 */
/**
 * Created by myoung on 19/11/2014.
 */
describe('When opening the game page', function () {

    var sinon = require('sinon'),
        rewire = require('rewire'),
        GameController = rewire('../../controllers/gameController'),
        gamesMock = function(){};


    before(function () {
        gamesMock.getMyGame = sinon.stub().callsArgWith(1, null, 'game1');
        GameController.__set__({
          'games': gamesMock
        });
    });

    it('I should be able to retrieve my active games', function () {
        var gameController = new GameController();
        var req,res,spy;

        req = res = {params:{id:1}};
        spy = res.render = sinon.spy();

        gameController.game(req,res);

        expect(spy.lastCall.args[1].game).equal('game1');
        expect(gamesMock.getMyGame.calledOnce);
        expect(gamesMock.getMyGame.calledWith(1));
    });
});
