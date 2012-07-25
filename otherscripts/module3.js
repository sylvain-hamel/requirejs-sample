/*
Step 10 - Define the module3
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
	Step 11 - export the two types
	*/  	
	return {
		Woo : Woo,
		War : War
	}
});