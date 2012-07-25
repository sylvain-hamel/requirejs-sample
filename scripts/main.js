require.onError = function (err) {
	alert("RequireJS error: Cannot load module '" + err.requireModules + "'");
}

window.onerror = function (errorMsg, url, lineNumber) {
	alert("Javascript error: " + errorMsg + "\r\nsource: " + url + "\r\nline: " +  lineNumber);
}

/*
Step 12 - Ask RequireJS for jquery, module1, module2 and nomodule1 and use them
*/
require(['jquery', 'module1', 'module2', 'nomodule1', '../otherscripts/module3'], function (jq, m1, m2, nm1, m3) {

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
