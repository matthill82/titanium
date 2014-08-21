function DetailView(params){
	var win = Ti.UI.createWindow({
		title: params.title,
		backgroundColor: "#FFF"
	});
	
	var img = Ti.UI.createImageView({
		image: params.mainImage,
		width: "320dp",
		height: "180dp",
		top: "0dp"
	});
	
	var headerLabel = Ti.UI.createLabel({
		text: params.detailTitle,
		font: {
			fontSize: "16dp",
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontWeight: "bold" //Android will ignore this
		},
		top: "156dp",
		right: "12dp",
		color: "#FFF",
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		//Shadow: iOS only
		shadowColor: "#1a3743", //Darker blue
		shadowOffset: {x:1, y:1}
	});

	var detail = Ti.UI.createWebView({
		url: params.detail,
		top: "180dp",
		height: Ti.UI.FILL,
		enableZoomControls: false //Android only
	});

	win.add(img);
	win.add(detail);
	win.add(headerLabel);

	return win;
}
module.exports = DetailView;