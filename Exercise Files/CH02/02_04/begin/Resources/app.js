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
			shortDescription: "Explore California our favorite way...by foot! Get outdoors and into the millions of acres of forests, desert, and spectacular scenery that California is famous for.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			leftImage: "/images/backpackCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "California Calm",
			shortDescription: "Looking for a little relaxation? California Calm is our hand-picked collection of incredible California Spas and therapy retreats.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			leftImage: "/images/calmCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "California Hotsprings",
			shortDescription: "Let's be honest, you have no idea what a hot spring is...do you? Well, we do, and we can't wait for you to experience the relaxing warmth of nature's hot-tubs!",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			leftImage: "/images/hotspringsCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "Cycle California",
			shortDescription: "Whether you are a hard-core mountain biking enthusiast, or just looking for a cool way to see the many scenic towns and vistas of our great state, Cycle California has a package for you!",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			leftImage: "/images/cycleCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "From Desert to Sea",
			shortDescription: "Our most wide-ranging tour option! Come explore California from the stunning deserts all the way to our beautiful coast.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			leftImage: "/images/desertCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "Kids California",
			shortDescription: "California is an amazing playground for everyone and should be experienced by all. From amazing museums, outstanding parks, Disney, and kid-centered nature experiences, Kids California truly has it all! ",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			leftImage: "/images/kidsCalThumb.png",
			hasChild: true,
			className: "tableRow",
		},
		{
			title: "Nature Watch",
			shortDescription: "If you love the outdoors, nature, and the environment, California is the place for you! Our eco-tours range from watching seals and whales to exploring the desert for rare lizards and fauna.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			leftImage: "/images/natureWatchCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "Snowboard Cali",
			shortDescription: "California has some of the best snowboarding in the US and at Explore California we've combed the runs to offer you the best resorts in the state. ",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			leftImage: "/images/snowboardCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "Taste of California",
			shortDescription: "Taste of California immerses you in the serene, romantic lifestyle of the California wine country and olive groves. Along the way you'll experience some of the best cuisine in the world, all made from fresh local ingredients by some of the nation's most renown chefs.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
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

	function createNewWindow(params){
		var win = Ti.UI.createWindow({
			title: params.title,
			backgroundColor: "#FFF"
		});
		var label = Ti.UI.createLabel({
			text: params.shortDescription,
			font: params.font
		});
		win.add(label);
		//Fire the click sound
		win.addEventListener("click", function(e){
			Ti.App.fireEvent("clickSound", {caller: "newWindow"});
		});
		return win;
	}

	tableView.addEventListener("click", function(e){
		//Fire the click sound
		Ti.App.fireEvent("clickSound", {caller: "tableRow"});

		var w = createNewWindow({
			title: e.rowData.title,
			shortDescription: e.rowData.shortDescription,
			font: e.rowData.font
		});
		tab.open(w, {animated: true});
	});

	//Create handles for the click sound
	var clickSoundFilename = "/media/click";
	clickSoundFilename += (Ti.Platform.osname === "android") ? ".ogg" : ".caf" ;
	var click = Titanium.Media.createSound({//This is for short sounds (e.g. interface sounds)
		url: clickSoundFilename,
		preload: true
	});
	Ti.App.addEventListener("clickSound", function(e){
		click.play();
		console.log("click! caller:" + e.from);
	});

	tabGroup.addTab(tab);

	// open tab group
	tabGroup.open();

})();