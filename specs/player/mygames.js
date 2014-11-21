/**
 * Created by myoung on 19/11/2014.
 */
describe('When authenticated as Kerry', function () {

    var sinon = require('sinon'),
        rewire = require('rewire'),
        games = rewire('../../services/games'),
        gamesServiceMock = {};

    before(function () {
        gamesServiceMock.getGames = sinon.stub().callsArgWith(1, null, ['game1','game2','game3']);
        games.__set__({
            'data': gamesServiceMock
        });
    });

    it('I should be able to retrieve my games', function () {
        var result1;
        games.prototype.getMyGames('Kerry',function(error, result){
            result1=result;
        });

        expect(gamesServiceMock.getGames).calledOnce;
        expect(gamesServiceMock.getGames.calledWith('Kerry')).to.be.ok;
        expect(result1.length).equal(3);
    });
});
