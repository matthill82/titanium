//We'll enclose our code in a self-invoking function to avoid
//inadvertent pollution of the global namespace

(function(){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

	var TourView = require("/views/TourView");
	var DetailView = require("/views/DetailView"); //Remember: this is a function
	var Prefs = require("/Prefs");

	var tabGroup = Titanium.UI.createTabGroup();

	var mainWindow = Titanium.UI.createWindow({
		title: "Explore California",
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: true
	});
	var tab = Titanium.UI.createTab({
		icon:'KS_nav_views.png', //Irrelevant; we are hiding the tab bar
		title:'Tab 1', //Irrelevant; we are hiding the tab bar
		window:mainWindow
	});

	var tourView = new TourView();
	
	mainWindow.add(tourView);

	tourView.addEventListener("click", function(e){
		var detailView = new DetailView({
			detailTitle: e.rowData.detailTitle,
			mainImage: e.rowData.mainImage,
			detail: e.rowData.detail
		});
		tab.open(detailView, {animated: true});
		Ti.App.fireEvent("clickSound", {caller: "newWindow"});
	});

	//Preferences include
	//iOS
	//Create a button for the window navBar

	var iOSPrefsView = require("/views/iOSPrefsView");

	var prefsButton = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.INFO_LIGHT //iOS only
	});

	prefsButton.addEventListener("click", function(e){

		var prefsView = new iOSPrefsView();

		//In this case, the preferencesView is a standalone window that isn't
		//part of the broader content flow.
		//For this reason, we open the window as a modal window using the window's
		//open method while passing an object that has a property "modal" set to true
		prefsView.open({modal: true});
	});
	//Set the button on the mainWindow object
	//Because it is set on the mainWindow object, it does NOT need to be added via the .add() method
	mainWindow.setLeftNavButton(prefsButton);

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

	tabGroup.addTab(tab);

	// open tab group
	tabGroup.open();

})();

//We'll enclose our code in a self-invoking function to avoid
//inadvertent pollution of the global namespace

(function(){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

	var TourView = require("/views/TourView");
	var DetailView = require("/views/DetailView"); //Remember: this is a function
	var Prefs = require("/Prefs");

	var tabGroup = Titanium.UI.createTabGroup();

	var mainWindow = Titanium.UI.createWindow({
		title: "Explore California",
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: true
	});
	var tab = Titanium.UI.createTab({
		icon:'KS_nav_views.png', //Irrelevant; we are hiding the tab bar
		title:'Tab 1', //Irrelevant; we are hiding the tab bar
		window:mainWindow
	});

	var tourView = new TourView();
	
	mainWindow.add(tourView);

	tourView.addEventListener("click", function(e){
		var detailView = new DetailView({
			detailTitle: e.rowData.detailTitle,
			mainImage: e.rowData.mainImage,
			detail: e.rowData.detail
		});
		tab.open(detailView, {animated: true});
		Ti.App.fireEvent("clickSound", {caller: "newWindow"});
	});

	var soundIsOn = Prefs.read().soundIsOn;

	//iOS
	//Create a button for the window navBar

	var iOSPrefsView = require("/views/iOSPrefsView");

	var prefsButton = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.INFO_LIGHT //iOS only
	});

	prefsButton.addEventListener("click", function(e){

		var prefsView = new iOSPrefsView();

		//In this case, the preferencesView is a standalone window that isn't
		//part of the broader content flow.
		//For this reason, we open the window as a modal window using the window's
		//open method while passing an object that has a property "modal" set to true
		prefsView.open({modal: true});
	});
	//Set the button on the mainWindow object
	//Because it is set on the mainWindow object, it does NOT need to be added via the .add() method
	mainWindow.setLeftNavButton(prefsButton);

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

	Ti.App.addEventListener("toggleSound", function(e){
		if(soundIsOn){
			soundIsOn = 0;
		} else {
			soundIsOn = 1;
		}
		//Save the sound preferences
		Prefs.save({soundIsOn: soundIsOn});
	});

	tabGroup.addTab(tab);

	// open tab group
	tabGroup.open();

})();