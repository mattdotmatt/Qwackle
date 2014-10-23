/*
 * Created by myoung on 23/10/14.
 */
function Game(player1, player2) {
    this.turn = player1;
    this.tiles = new Array(108);
    this.players = new Array(
        {
            name:player1,
            tiles:new Array(6)
        },
        {
            name:player2,
            tiles:new Array(6)
        }
    );
}

module.exports = Game;