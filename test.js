/**
 * http://usejsdoc.org/
 */
var name;
var setName = function(Name) {
	name = Name;
};
var sayHi = function() {
	console.log('Hi, I am ' + name);
};
setName('Sean');
sayHi();