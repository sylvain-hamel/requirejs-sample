/*
Step 2 - Configure RequireJS before using it
*/
var require = {

	waitSeconds: 30,

	/*
	Step 3 - Map the 'jquery' identifier to the jquery URL.

	- This is mandatory for jquery because jquery defines() itself with this hardcoded itentifier.
	- Setting paths is also useful if you what to shield modules from other modules' location. 
	*/
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery'
    },

	/*
	Step 4 - Since nomodule1.js is not a AMD module (it does not call define), we must tell
	         RequireJS what to do if a module asks for this module. Here we tell RequireJS to
	         use the nm1 global variable created by nomodule1.js as its export.
	*/    
    shim:{
    	'nomodule1' : {
    		exports: 'nm1'
		},

		'../otherscripts/module3': ['jquery'],
    }
};