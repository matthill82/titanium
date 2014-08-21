//We'll enclose our code in a self-invoking function to avoid
//inadvertent pollution of the global namespace

(function(){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

	var TourView = require("/views/TourView");
	var DetailView = require("/views/DetailView"); //Remember: this is a function

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
	});

	//Preferences include
	if(Ti.Platform.osname === "android"){
		//Android
		//Use an Android menu
		//Since we are using a tabGroup as the main application shell,
		//we listen for the "open" event and then create a menu by
		//utilizing the activity property of the group
		//If we were using an ordinary window, we'd add the event listener
		//to the window
		tabGroup.addEventListener("open", function() {

			var activity = tabGroup.activity;

			activity.onCreateOptionsMenu = function(e) {
				var menu = e.menu;
				var menuItem = menu.add({title: "My Menu Item"});
			};

		});
	} else {
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
	}

	tabGroup.addTab(tab);

	// open tab group
	tabGroup.open();

})();