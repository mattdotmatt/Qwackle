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
        gamesMock.getMyGames = sinon.stub().callsArgWith(1, null, [
            {_id:'1',name:'game1', active:true},
            {_id:'2',name:'game2', active:true},
            {_id:'3',name:'game3', active:false}]);
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
        expect(spy.lastCall.args[1].games[0]._id).equal('1');
        expect(spy.lastCall.args[1].games[0].name).equal('game1');
        expect(spy.lastCall.args[1].games[0].active).equal(true);
        expect(spy.lastCall.args[1].games[1]._id).equal('2');
        expect(spy.lastCall.args[1].games[1].name).equal('game2');
        expect(spy.lastCall.args[1].games[1].active).equal(true);
        expect(spy.lastCall.args[1].games[2]._id).equal('3');
        expect(spy.lastCall.args[1].games[2].name).equal('game3');
        expect(spy.lastCall.args[1].games[2].active).equal(false);
        expect(gamesMock.getMyGames.calledOnce);
        expect(gamesMock.getMyGames.calledWith('Kerry'));
    });
});
