/**
 * Created by myoung on 21/11/2014.
 */
/**
 * Created by myoung on 19/11/2014.
 */
describe('When opening the main page', function () {

    var sinon = require('sinon'),
        rewire = require('rewire'),
        HomeController = rewire('../../controllers/homeController'),
        gamesMock = function(){};


    before(function () {
        gamesMock.getMyGames = sinon.stub().callsArgWith(1, null, ['game1','game2','game3']);
        HomeController.__set__({
          'games': gamesMock
        });
    });

    it('I should be able to retrieve my active games', function () {
        var homeController = new HomeController();
        var req,res,spy;

        req = res = {user : 'Kerry'};
        spy = res.render = sinon.spy();

        homeController.home(req,res);

        expect(spy.lastCall.args[1].games.length).equal(3);
        expect(spy.lastCall.args[1].games[0]).equal('game1');
        expect(spy.lastCall.args[1].games[1]).equal('game2');
        expect(spy.lastCall.args[1].games[2]).equal('game3');
        expect(gamesMock.getMyGames.calledOnce);
        expect(gamesMock.getMyGames.calledWith('Kerry'));
    });
});
