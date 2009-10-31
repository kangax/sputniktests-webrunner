// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.1.1_A1_T4;
* @section: 15.2.1.1, 15.2.2.1;
* @assertion: When the Object(value) is called and the value is null, undefined or not supplied, 
* create and return a new Object object if the object constructor had been called with the same arguments (15.2.2.1);
* @description: Creating Object(undefined) and checking its properties;
*/

__obj = Object(undefined);

n__obj = new Object(undefined); 

if (__obj.toString() !== n__obj.toString()){
	$ERROR('#1');	
}

if (__obj.constructor !== n__obj.constructor) {
	$ERROR('#2');
}

if (__obj.prototype !== n__obj.prototype) {
	$ERROR('#3');
}	

if (__obj.toLocaleString() !== n__obj.toLocaleString()) {
	$ERROR('#4');
}

if (typeof __obj !== typeof n__obj) {
	$ERROR('#5');
}
