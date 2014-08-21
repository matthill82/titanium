(function(){
	//Detect if an android phone or tablet
	var DPI = SCREEN.dpi;
	var W = SCREEN.platformWidth / DPI;
	var H = SCREEN.platformHeight / DPI;
	var SCREEN_SIZE = Math.sqrt(W*W + H*H);
	//Determine if it is a tablet based on the size of the screen diagonal
	//If the size is greater than or equal to 6", it's a tablet
	var isTablet = (SCREEN_SIZE >= 6) ? true : false;

	var win = Ti.UI.createWindow({
		backgroundColor: "#FFF"
	});

	var label = Ti.UI.createLabel({
		text: (isTablet) ? "This is a tablet" : "This is a phone",
		color: "#000",
		font:{
			fontSize: "18dp"
		}
	});

	win.add(label);

	win.open();
})();