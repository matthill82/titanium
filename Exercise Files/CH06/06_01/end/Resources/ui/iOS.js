(function(){
	//Use a self-invokign function to prevent variable pollution

	//Determine if this is a tablet or not
	var isTablet = (OS === "ipad") ? true : false;

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