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

	tabGroup.addTab(tab);

	var mediaBtn = Ti.UI.createButton({
		title: "Take photo",
		bottom: "12dp"
	});

	var postcard = Ti.UI.createView({
		top: "12dp",
		width: "300dp",
		height: "300dp",
		backgroundColor: "#FFCC00"
	});

	var postcardFrame = Ti.UI.createImageView({
		image: "/images/pictureFrame.png",
		zIndex: 10 //So that the frame floats above the picture
	});

	postcard.add(postcardFrame);

	var img;  //forward reference for the container for the image

	mainWindow.add(mediaBtn);
	mainWindow.add(postcard);

	//An object to hold camera callbacks
	var camera = {
		onSuccess: function(e){
			if(e.mediaType === Ti.Media.MEDIA_TYPE_PHOTO){ //Make sure it is a PHOTO that has been taken
				
				if(img){
					//Image view exists; let's remove it before we add again
					postcard.remove(img);//
				}
				//e.media is a Blob representing the image
				//we can plug it into the image property of a new imageView
				img = Ti.UI.createImageView({
					image: e.media,
					zIndex: 0
				});

				//Add the photo taken to the postcard view
				//The photo will scale down to the view
				postcard.add(img);

			} else {
				alert("This is not a photo");
			}
		},
		onCancel: function(e){
			alert("Photo cancelled");
		},
		onError: function(e){
			alert("An error occured with code: " + e.code);
		}
	};

	mediaBtn.addEventListener("click", function(e){
		Ti.Media.showCamera({
			success: camera.onSuccess,
			cancel: camera.onCancel,
			error: camera.onError,
			allowEditing: true, //iOS only
			mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO], //Make sure only pictures are taken
			videoQuality: Ti.Media.QUALITY_HIGH, //Set the quality of the picture to be taken
			saveToPhotoGallery: false //set to true if you want the photo automatically saved to the device's photo gallery
		});

	});

	// open tab group
	tabGroup.open();

})();