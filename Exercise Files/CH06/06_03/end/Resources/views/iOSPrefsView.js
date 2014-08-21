var Prefs = require("/Prefs");
var soundIsOn = Prefs.read().soundIsOn;

function iOSPrefsView(){

	var win = Ti.UI.createWindow({
		title: "Preferences",
		backgroundColor: "#FFF",
	});
	
	var closeButton = Ti.UI.createButton({
		title: "Close",
		bottom: 12
	});
	
	win.add(closeButton);

	var audioPrefsRow = Ti.UI.createTableViewRow({
		title: "Interface sounds",
		font:{
			fontSize: 18,
			fontFamily: "Aller"
		},
		height: 48
	});

	var audioSwitch = Ti.UI.createSwitch({
		value: soundIsOn, //We'll set this later
		top: 8,
		right: 8,
		bottom: 8
	});

	audioPrefsRow.add(audioSwitch);

	var emailRow = Ti.UI.createTableViewRow({height: 120});

	var emailTXT = Ti.UI.createLabel({
		text: "We want to hear from you!",
		top: 16,
		font:{
			fontSize: 18,
			fontFamily: "Aller"
		}
	});

	var emailBTN = Ti.UI.createButton({
		title: "Email us now",
		bottom: 16,
		font:{
			fontSize: 14,
			fontFamily: "Aller"
		}
	});

	emailRow.add(emailTXT);
	emailRow.add(emailBTN);

	var prefsRows = [
		audioPrefsRow,
		emailRow
	];

	var prefsTable = Ti.UI.createTableView({
		top: 0,
		height: 325,
		style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
		backgroundColor: "transparent",
		data: prefsRows
	});

	win.add(prefsTable);

	audioSwitch.addEventListener("change", function(e){
		Ti.App.fireEvent("toggleSound");
	});

	emailBTN.addEventListener("click", function(e){
		var email = Ti.UI.createEmailDialog({
			html: true, //So that we can use html-formatted text
			subject: "Explore California with Me",
			toRecipients: ["info@explorecalifornia.org"], //notice the array
			messageBody: "<p>Explore California!</p><p>Indeed I will</p>"
		});
		email.open();
	});

	closeButton.addEventListener("click", function(e){
		win.close();
	});

	return win;
}
module.exports = iOSPrefsView;