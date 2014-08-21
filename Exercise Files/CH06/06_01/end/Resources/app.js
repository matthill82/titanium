//Detect platform
var OS = Ti.Platform.osname;
var SCREEN = Ti.Platform.displayCaps;

if(OS === "android"){
	Ti.include("ui/android.js");
} else if(OS === "iphone" || OS === "ipad"){
	Ti.include("ui/iOS.js");
}