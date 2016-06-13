/**
 * Created by manos on 10/06/16.
 */

var demo = {};
var centerX = 800/2;
var centerY = 600/2;
var dude;
var speed = 4;
demo.state1 = function(){};
demo.state1.prototype = {
	preload: function(){
		game.load.spritesheet('dude', 'assets/sprites/dude.png', 32, 48);
	},
	create: function () {
		game.stage.backgroundColor = '#DDDDDD';
		console.log("State1");

		changeGameState();

		//Set our hero in the middle of the screen
		dude = game.add.sprite(centerX, centerY, 'dude');
		dude.anchor.setTo(0.5, 0.5);

		game.physics.arcade.enable(dude);

		//Walking left and right animations
		dude.animations.add("right", [5, 6, 7, 8], 10, true);
		dude.animations.add("left", [0, 1, 2, 3], 10, true);

		//Canvas resize
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	},
	update: function () {

		dude.body.velocity.x = 0;

		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			dude.x += speed;
			dude.animations.play("right");
		}

		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			dude.x -= speed;
			dude.animations.play("left");
		}

		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			dude.y += speed;
			dude.animations.play();
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			dude.y -= speed;
			dude.animations.play();
		}


		else{
			dude.animations.stop();
			dude.frame = 4;
		}
	}
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