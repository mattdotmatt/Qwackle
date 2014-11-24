/**
 * Created by myoung on 21/11/2014.
 */
/**
 * Created by myoung on 19/11/2014.
 */
describe('When opening the main page', function () {

    var sinon = require('sinon'),
        request = require('supertest'),
        app = require('../../app'),
        rewire = require('rewire'),
        homeController = rewire('../../controllers/homeController'),
        gamesMock = function(){};

    before(function () {
        gamesMock.prototype.getMyGames = sinon.stub().callsArgWith(1, null, ['game1','game2','game3']);
        //sinon.stub(gamesMock.prototype, "getMyGames").callsArgWith(1, null, ['game1','game2','game3']);
        homeController.__set__({
          'games': gamesMock
        });
    });

    it('I should be able to retrieve my active games', function () {
/*
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                expect(err).to.be.a('null');
                //parseFloat(res.text).should.equal(2);
            });

        expect(gamesMock.prototype.getMyGames).calledOnce;
        expect(gamesMock.prototype.getMyGames.calledWith('Kerry')).to.be.ok;
  */
    });
});
