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
        gamesMock.getMyGame = sinon.stub().callsArgWith(2, null, {
            _id:'1',
            name:'game1',
            players:[
                {name:'Kerry'},
                {name:'Julie'},
                {name:'A N Other'},
            ]});
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

        expect(spy.lastCall.args[1].game.name).equal('game1');
        expect(spy.lastCall.args[1].game._id).equal('1');
        expect(spy.lastCall.args[1].game.players.length).equal(3);
        expect(spy.lastCall.args[1].game.players[0].name).equal('Kerry');
        expect(spy.lastCall.args[1].game.players[1].name).equal('Julie');
        expect(spy.lastCall.args[1].game.players[2].name).equal('A N Other');
        expect(gamesMock.getMyGame.calledOnce);
        expect(gamesMock.getMyGame.calledWith(1));
    });
});
