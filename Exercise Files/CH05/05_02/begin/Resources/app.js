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
		title: "Capture media",
		bottom: "12dp"
	});

	var mediaView = Ti.UI.createView({
		top: "12dp",
		width: "300dp",
		height: "300dp",
		backgroundColor: "#FFCC00" //So that we can see the view area
	});

	var img;  //forward reference for the container for the image

	mainWindow.add(mediaBtn);
	mainWindow.add(mediaView);

	//An object to hold camera callbacks
	var camera = {
		onSuccess: function(e){
			if(e.mediaType === Ti.Media.MEDIA_TYPE_PHOTO){ //Make sure it is a PHOTO that has been taken
				
				if(img){
					//Image view exists; let's remove it before we add again
					mediaView.remove(img);//
				}
				//e.media is a Blob representing the image
				//we can plug it into the image property of a new imageView
				img = Ti.UI.createImageView({
					image: e.media,
					zIndex: 0
				});

				//Add the photo taken to the mediaView view
				//The photo will scale down to the view
				mediaView.add(img);

				//If you wanted, you could get more information about the size of the picture
				//via the .size property of e.media

			} else if(e.mediaType === Ti.Media.MEDIA_TYPE_VIDEO){
				vid = Ti.Media.createVideoPlayer({
					media: e.media
				});
				
				//Add the video taken to the media view
				mediaView.add(vid);
			} else {
				alert("This is not a photo or video");
			}
		},
		onCancel: function(e){
			alert("Action cancelled");
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
			saveToPhotoGallery: true //set to true if you want the photo automatically saved to the device's photo gallery
		});
	});

	// open tab group
	tabGroup.open();

})();