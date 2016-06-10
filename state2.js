/**
 * Created by manos on 10/06/16.
 */
demo.state2 = function(){};
demo.state2.prototype = {
	preload: function(){},
	create: function () {
		game.stage.backgroundColor = "#3A5093";
		console.log("state2");

		changeGameState();
	},
	update: function () {}
};