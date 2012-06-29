/*
This is just a plais javascript file that create a namespace variable named nm1.
*/ 

var Moo = function(){
	this.method1 = function(){
		console.log('Moo');
	};
};

var Mar = function(){
	this.method1 = function(){
		console.log('Mar');
	};
};

window.nm1 = {};
nm1.Moo = Moo;
nm1.Mar = Mar;
