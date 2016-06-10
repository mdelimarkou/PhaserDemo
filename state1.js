/**
 * Created by manos on 10/06/16.
 */

var demo = {};
demo.state1 = function(){};
demo.state1.prototype = {
	preload: function(){},
	create: function () {
		game.stage.backgroundColor = '#DDDDDD';
		console.log("State1");


		changeGameState();

	},
	update: function () {}
};

function changeState (i, stateNum){
	game.state.start('state' + stateNum);
}

// GLOBAL FUNCTIONS

//Go to different state trough keyboard
function addKeyCallback (key, fn, args) {
	game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

// Grouping all change states into a function which we call inside create property
function changeGameState(){
	addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
	addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
	addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
	addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
	addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
}