function iOSPrefsView(){

	var win = Ti.UI.createWindow({
		title: "Preferences",
		backgroundColor: "#FFF"
	});
	
	var closeButton = Ti.UI.createButton({
		title: "Close"
	});

	win.add(closeButton);

	closeButton.addEventListener("click", function(e){
		win.close();
	});

	return win;
}
module.exports = iOSPrefsView;