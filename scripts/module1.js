/*
Step 6 - Define the module1 module with a dependency on module2
*/    	
define(['module2'], function(module2){
	var Foo = function(){
		this.method1 = function(){
			console.log('Foo');
		};
	};

	var Bar = function(){
		this.method1 = function(){
			console.log('Bar');
		};
	};


	/*
	Step 7 - export the two types
	*/  	
	return {
		Foo : Foo,
		Bar : Bar
	};
});