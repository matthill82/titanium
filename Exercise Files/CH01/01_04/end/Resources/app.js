//We'll enclose our code in a self-invoking function to avoid
//inadvertent pollution of the global namespace

(function(){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

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

	//Add a table of tours to the app
	var tours = [
		{
			title: "Backpack Cal",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: 18,
				fontWeight: "bold"
			},
			leftImage: "/images/backpackCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "California Calm",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: 18,
				fontWeight: "bold"
			},
			leftImage: "/images/calmCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "California Hotsprings",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: 18,
				fontWeight: "bold"
			},
			leftImage: "/images/hotspringsCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "Cycle California",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: 18,
				fontWeight: "bold"
			},
			leftImage: "/images/cycleCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "From Desert to Sea",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: 18,
				fontWeight: "bold"
			},
			leftImage: "/images/desertCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "Kids California",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: 18,
				fontWeight: "bold"
			},
			leftImage: "/images/kidsCalThumb.png",
			hasChild: true,
			className: "tableRow",
		},
		{
			title: "Nature Watch",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: 18,
				fontWeight: "bold"
			},
			leftImage: "/images/natureWatchCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "Snowboard Cali",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: 18,
				fontWeight: "bold"
			},
			leftImage: "/images/snowboardCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "Taste of California",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: 18,
				fontWeight: "bold"
			},
			leftImage: "/images/tasteCalThumb.png",
			hasChild: true,
			className: "tableRow"
		}
	];

	var tableView = Ti.UI.createTableView({
		top: 0,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: tours
	});

	mainWindow.add(tableView);

	tabGroup.addTab(tab);

	// open tab group
	tabGroup.open();

})();