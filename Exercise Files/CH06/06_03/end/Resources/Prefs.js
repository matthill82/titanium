var Prefs = {};

//Load a custom preferences file
//If it doesn't exist in the application data directory, it will be created
var prefsFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "prefs.txt");
var prefsObject; //We'll be loading the data from the preferences.txt file into here
//On first run, this won't exist
//so, create the file and store the default value via a JSON-formatted string
if(!prefsFile.exists()){
	prefsObject = {soundIsOn: true};
	prefsFile.write(JSON.stringify(prefsObject));
}

Prefs.read = function(){
	prefsObject = prefsFile.read();
	prefsObject = JSON.parse(prefsObject);
	return prefsObject;
};

Prefs.save = function(prefs){
	prefsObject = prefs;
	prefsFile.write(JSON.stringify(prefsObject));
};

module.exports = Prefs;