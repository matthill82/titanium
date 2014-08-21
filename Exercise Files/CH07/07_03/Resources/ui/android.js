//We'll enclose our code in a self-invoking function to avoid
//inadvertent pollution of the global namespace

(function(){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

	var TourView = require("/views/TourView");
	var DetailView = require("/views/DetailView"); //Remember: this is a function
	var Prefs = require("/Prefs");

	var mainWindow = Titanium.UI.createWindow({
		title: "Explore California",
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false
	});

	var tourView = new TourView();
	
	mainWindow.add(tourView);

	tourView.addEventListener("click", function(e){
		var detailView = new DetailView({
			detailTitle: e.rowData.detailTitle,
			mainImage: e.rowData.mainImage,
			detail: e.rowData.detail
		});
		detailView.open({
			activityEnterAnimation: Ti.Android.R.anim.slide_in_left,
			activityExitAnimation: Ti.Android.R.anim.slide_out_right
		});
		Ti.App.fireEvent("clickSound", {caller: "newWindow"});
	});


	mainWindow.addEventListener("open", function() {

		var activity = mainWindow.activity;
		var soundIsOn = Prefs.read().soundIsOn;

		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			
			var emailDialog = menu.add({title: "Contact us", showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM});
			var soundPrefs = menu.add({title: "Interface Sounds", showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM});

			//Display different images based on the value of soundIsOn
			if(soundIsOn){
				soundPrefs.setIcon(Titanium.Android.R.drawable.ic_lock_silent_mode);
				soundIsOn = 0;
			} else {
				soundPrefs.setIcon(Titanium.Android.R.drawable.ic_lock_silent_mode_off);
				soundIsOn = 1;
			}

			soundPrefs.addEventListener("click", function(e){
				if(soundIsOn){
					soundPrefs.setIcon(Titanium.Android.R.drawable.ic_lock_silent_mode);
					soundIsOn = 0;
				} else {
					soundPrefs.setIcon(Titanium.Android.R.drawable.ic_lock_silent_mode_off);
					soundIsOn = 1;
				}
			});

			emailDialog.setIcon(Titanium.Android.R.drawable.ic_dialog_email);

			emailDialog.addEventListener("click", function(e){
				var email = Ti.UI.createEmailDialog({
					html: true, //So that we can use html-formatted text
					subject: "Explore California with Me",
					toRecipients: ["fake.address@emailaddy.com"], //notice the array
					messageBody: "<p>Explore California!</p><p>Indeed I will</p>"
				});
				email.open();
			});

			//Save the sound preferences
			Prefs.save({soundIsOn: soundIsOn});
		};

	});

	//Create handles for the click sound
	var clickSoundFilename = "/media/click";
	clickSoundFilename += (Ti.Platform.osname === "android") ? ".ogg" : ".caf" ;
	var click = Titanium.Media.createSound({//This is for short sounds (e.g. interface sounds)
		url: clickSoundFilename,
		preload: true
	});
	Ti.App.addEventListener("clickSound", function(e){
		if(Prefs.read().soundIsOn){
			click.play();
		}
	});

	mainWindow.open();

})();