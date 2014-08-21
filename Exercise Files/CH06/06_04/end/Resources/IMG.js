function IMG(path){
	var OS = Ti.Platform.osname;
	var density = Ti.Platform.displayCaps.density;
	var extensions = {
		low: "-L",
		medium: "-M",
		high: "-H",
		xhigh: "-X"
	};
	var str = [];
	if(OS !== "android"){
		//It's iOS - leave it alone
		return path;
	} else {
		//It's android
		//disassemble the path
		str = path.split(".");
		return str[0] + extensions[density] + "." + str[1];
	}
	return path;
}

module.exports = IMG;