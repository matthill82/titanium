var Tours = require("/views/Tours");

function TourView(){
	var tourView = Ti.UI.createTableView({
		top: 0,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: Tours
	});
	return tourView;
}

module.exports = TourView;