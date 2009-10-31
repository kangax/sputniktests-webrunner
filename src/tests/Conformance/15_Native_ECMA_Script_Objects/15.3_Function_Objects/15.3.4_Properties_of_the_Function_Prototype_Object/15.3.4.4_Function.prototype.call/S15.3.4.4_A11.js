// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A11;
* @section: 15.3.4.4;
* @assertion: The Function.prototype.call.length property has the attribute DontEnum;
* @description: Checking if enumerating the Function.prototype.call.length property fails;
*/

//CHECK#0
if (!(Function.prototype.call.hasOwnProperty('length'))) {
  $FAIL('#0: the Function.prototype.call has length property.');
}


// CHECK#1
if (Function.prototype.call.propertyIsEnumerable('length')) {
  $ERROR('#1: the Function.prototype.call.length property has the attributes DontEnum');
}

// CHECK#2
for (p in Function.prototype.call){
  if (p==="length")
    $ERROR('#2: the Function.prototype.call.length property has the attributes DontEnum');
}
