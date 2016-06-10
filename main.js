/**
 * Created by manos on 10/06/16.
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add('state1', demo.state1);
game.state.start('state1');