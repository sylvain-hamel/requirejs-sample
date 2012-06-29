/*
This is just a plain javascript file that creates a namespace named nm1 with two classes.
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
