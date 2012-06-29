

/*
Step 2 - Configure RequireJS before using it
*/
require.config({

	/*
	Step 3 - Map the 'jquery' identifier to the jquery URL.

	- This is mandatory for jquery because jquery defines() itself with this hardcoded itentifier.
	- Setting paths is also useful if you what to shield modules from other modules' location. 
	*/
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
    },

	/*
	Step 4 - Since nomodule1.js is not a AMD module (it does not call define), we must tell
	         RequireJS what to do if a module asks for this module. Here we tell RequireJS to
	         use the nm1 global variable created by nomodule1.js as its export.
	*/    
    shim:{
    	'nomodule1' : {
    		exports: 'nm1'
		}
    }
});


/*
Step 8 - Ask RequireJS for jquery, module1, module2 and nomodule1 and use them
*/    
require(['jquery', 'module1', 'module2', 'nomodule1'], function (jq, m1, m2, nm1) {

	console.log('main:require:completed'); console.log('main:jq object is ' + jq);

	console.log('main:m1 object is ' + m1);
	console.log('main:m1.Foo object is ' + m1.Foo);
	console.log('main:m1.Bar object is ' + m1.Bar);

	console.log('main:m2 object is ' + m2);
	console.log('main:m2.Woo object is ' + m2.Woo);
	console.log('main:m2.War object is ' + m2.War);

	console.log('main:nm1 object is ' + nm1);
	console.log('main:nm1.Moo object is ' + nm1.Moo);
	console.log('main:nm1.Mar object is ' + nm1.Mar);


});