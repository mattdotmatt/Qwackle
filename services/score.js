/*
 * Created by myoung on 23/10/14.
 */

var Score = function () {};

Score.prototype.calculateScore = function(tiles) {
    return tiles.length;
};

module.exports = Score;