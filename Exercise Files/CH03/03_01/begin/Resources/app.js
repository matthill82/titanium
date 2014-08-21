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

	function createRow(params){
		var row = Ti.UI.createTableViewRow({
			height: Ti.UI.SIZE,
			width: Ti.UI.SIZE,
			hasChild: params.hasChild,
			className: params.className,
		});
		
		var leftImage = Ti.UI.createImageView({
			image: params.leftImage,
			width: 50,
			left: 0
		});
		
		var headerLabel = Ti.UI.createLabel({
			text: params.title,
			font: {
				fontSize: 16,
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontWeight: "bold" //Android will ignore this
			},
			top: 3,
			left: 66,
			height: Ti.UI.SIZE,
			color: params.color
		});
		
		var shortDescription = Ti.UI.createLabel({
			text: params.shortDescription,
			font:{
				fontSize: 10,
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Lt" : "Aller Light"
			},
			color: "#000",
			top: 24,
			height:"auto",
			left: 66
		});
		
		row.add(leftImage);
		row.add(headerLabel);
		row.add(shortDescription);

		return row;
	}

	//Add a table of tours to the app
	var tours = [
		createRow({
			title: "Backpack Cal",
			shortDescription: "Explore California our favorite way...by foot! Get outdoors and into the millions of acres of forests, desert, and spectacular scenery that California is famous for.",
			color: "#000",
			leftImage: "/images/backpackCalThumb.png",
			hasChild: true,
			className: "tableRow"
		}),
		createRow({
			title: "California Calm",
			shortDescription: "Looking for a little relaxation? California Calm is our hand-picked collection of incredible California Spas and therapy retreats.",
			color: "#000",
			leftImage: "/images/calmCalThumb.png",
			hasChild: true,
			className: "tableRow"
		}),
		createRow({
			title: "California Hotsprings",
			shortDescription: "Let's be honest, you have no idea what a hot spring is...do you? Well, we do, and we can't wait for you to experience the relaxing warmth of nature's hot-tubs!",
			color: "#000",
			leftImage: "/images/hotspringsCalThumb.png",
			hasChild: true,
			className: "tableRow"
		}),
		createRow({
			title: "Cycle California",
			shortDescription: "Whether you are a hard-core mountain biking enthusiast, or just looking for a cool way to see the many scenic towns and vistas of our great state, Cycle California has a package for you!",
			color: "#000",
			leftImage: "/images/cycleCalThumb.png",
			hasChild: true,
			className: "tableRow"
		}),
		createRow({
			title: "From Desert to Sea",
			shortDescription: "Our most wide-ranging tour option! Come explore California from the stunning deserts all the way to our beautiful coast.",
			color: "#000",
			leftImage: "/images/desertCalThumb.png",
			hasChild: true,
			className: "tableRow"
		}),
		createRow({
			title: "Kids California",
			shortDescription: "California is an amazing playground for everyone and should be experienced by all. From amazing museums, outstanding parks, Disney, and kid-centered nature experiences, Kids California truly has it all! ",
			color: "#000",
			leftImage: "/images/kidsCalThumb.png",
			hasChild: true,
			className: "tableRow",
		}),
		createRow({
			title: "Nature Watch",
			shortDescription: "If you love the outdoors, nature, and the environment, California is the place for you! Our eco-tours range from watching seals and whales to exploring the desert for rare lizards and fauna.",
			color: "#000",
			leftImage: "/images/natureWatchCalThumb.png",
			hasChild: true,
			className: "tableRow"
		}),
		createRow({
			title: "Snowboard Cali",
			shortDescription: "California has some of the best snowboarding in the US and at Explore California we've combed the runs to offer you the best resorts in the state. ",
			color: "#000",
			leftImage: "/images/snowboardCalThumb.png",
			hasChild: true,
			className: "tableRow"
		}),
		createRow({
			title: "Taste of California",
			shortDescription: "Taste of California immerses you in the serene, romantic lifestyle of the California wine country and olive groves. Along the way you'll experience some of the best cuisine in the world, all made from fresh local ingredients by some of the nation's most renown chefs.",
			color: "#000",
			leftImage: "/images/tasteCalThumb.png",
			hasChild: true,
			className: "tableRow"
		})
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