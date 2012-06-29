/*
Step 6 - Define the module2
*/    	
define(function(){
	var Woo = function(){
		this.method1 = function(){
			console.log('Woo');
		};
	};

	var War = function(){
		this.method1 = function(){
			console.log('War');
		};
	};


	/*
	Step 7 - export the two types
	*/  	
	return {
		Woo : Woo,
		War : War
	}
});