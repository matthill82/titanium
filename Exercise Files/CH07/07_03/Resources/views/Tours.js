function createRow(params){
	var row = Ti.UI.createTableViewRow({
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		mainImage: params.mainImage,
		hasChild: params.hasChild,
		detailTitle: params.title,
		detail: params.detail,
		className: params.className,
	});
	
	var leftImage = Ti.UI.createImageView({
		image: params.leftImage,
		width: "50dp",
		left: 0
	});

	var headerLabel = Ti.UI.createLabel({
		text: params.title,
		font: {
			fontSize: "16dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "3dp",
		left: "54dp",
		height: Ti.UI.SIZE,
		color: params.color
	});
	
	var shortDescription = Ti.UI.createLabel({
		text: params.shortDescription,
		font:{
			fontSize: "10dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Lt" : "Aller Light"
		},
		color: "#000",
		top: "24dp",
		height:"auto",
		left: "54dp"
	});
	
	row.add(leftImage);
	row.add(headerLabel);
	row.add(shortDescription);

	return row;
}

var Tours = [
	createRow({
		title: "Backpack Cal",
		shortDescription: "Explore California our favorite way...by foot! Get outdoors and into the millions of acres of forests, desert, and spectacular scenery that California is famous for.",
		color: "#000",
		leftImage: "/images/backpackCalThumb.png",
		mainImage: "/images/backpackCalImage.png",
		detail: "/detail/backpackCal.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "California Calm",
		shortDescription: "Looking for a little relaxation? California Calm is our hand-picked collection of incredible California Spas and therapy retreats.",
		color: "#000",
		leftImage: "/images/calmCalThumb.png",
		mainImage: "/images/calmCalImage.png",
		detail: "/detail/californiaCalm.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "California Hotsprings",
		shortDescription: "Let's be honest, you have no idea what a hot spring is...do you? Well, we do, and we can't wait for you to experience the relaxing warmth of nature's hot-tubs!",
		color: "#000",
		leftImage: "/images/hotspringsCalThumb.png",
		mainImage: "/images/hotspringsCalImage.png",
		detail: "/detail/californiaHotsprings.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "Cycle California",
		shortDescription: "Whether you are a hard-core mountain biking enthusiast, or just looking for a cool way to see the many scenic towns and vistas of our great state, Cycle California has a package for you!",
		color: "#000",
		leftImage: "/images/cycleCalThumb.png",
		mainImage: "/images/cycleCalImage.png",
		detail: "/detail/cycleCalifornia.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "From Desert to Sea",
		shortDescription: "Our most wide-ranging tour option! Come explore California from the stunning deserts all the way to our beautiful coast.",
		color: "#000",
		leftImage: "/images/desertCalThumb.png",
		mainImage: "/images/desertCalImage.png",
		detail: "/detail/desertSea.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "Kids California",
		shortDescription: "California is an amazing playground for everyone and should be experienced by all. From amazing museums, outstanding parks, Disney, and kid-centered nature experiences, Kids California truly has it all! ",
		color: "#000",
		leftImage: "/images/kidsCalThumb.png",
		mainImage: "/images/kidsCalImage.png",
		detail: "/detail/kidsCalifornia.html",
		hasChild: true,
		className: "tableRow",
	}),
	createRow({
		title: "Nature Watch",
		shortDescription: "If you love the outdoors, nature, and the environment, California is the place for you! Our eco-tours range from watching seals and whales to exploring the desert for rare lizards and fauna.",
		color: "#000",
		leftImage: "/images/natureWatchCalThumb.png",
		mainImage: "/images/natureWatchCalImage.png",
		detail: "/detail/natureWatch.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "Snowboard Cali",
		shortDescription: "California has some of the best snowboarding in the US and at Explore California we've combed the runs to offer you the best resorts in the state. ",
		color: "#000",
		leftImage: "/images/snowboardCalThumb.png",
		mainImage: "/images/snowboardCalImage.png",
		detail: "/detail/snowboardCali.html",
		hasChild: true,
		className: "tableRow"
	}),
	createRow({
		title: "Taste of California",
		shortDescription: "Taste of California immerses you in the serene, romantic lifestyle of the California wine country and olive groves. Along the way you'll experience some of the best cuisine in the world, all made from fresh local ingredients by some of the nation's most renown chefs.",
		color: "#000",
		leftImage: "/images/tasteCalThumb.png",
		mainImage: "/images/tasteCalImage.png",
		detail: "/detail/tasteCalifornia.html",
		hasChild: true,
		className: "tableRow"
	})
];
module.exports = Tours;