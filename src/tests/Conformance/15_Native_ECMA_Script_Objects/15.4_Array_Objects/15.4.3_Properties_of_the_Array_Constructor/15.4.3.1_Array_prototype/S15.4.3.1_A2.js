// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.3.1_A2;
* @section: 15.4.3.1;
* @assertion: The Array.prototype property has the attribute DontEnum;
* @description: Checking if enumerating the Array.prototype property fails;
*/


//CHECK#1
if (Array.propertyIsEnumerable('prototype') !== false) {
	$ERROR('#1: Array.propertyIsEnumerable(\'prototype\') === false. Actual: ' + (Array.propertyIsEnumerable('prototype')));
}

//CHECK#2
result = true;
for (p in Array){
	if (p === "prototype") {
	  result = false;
	}  
}

if (result !== true) {
	$ERROR('#2: result = true; for (p in Array) { if (p === "prototype") result = false; }  result === true;');
}

