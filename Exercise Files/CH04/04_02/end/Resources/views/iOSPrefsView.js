function iOSPrefsView(){

	var win = Ti.UI.createWindow({
		title: "Preferences",
		backgroundColor: "#FFF"
	});
	
	var closeButton = Ti.UI.createButton({
		title: "Close"
	});

	closeButton.addEventListener("click", function(e){
		win.close();
	});

	win.add(closeButton);

	return win;
}
module.exports = iOSPrefsView;