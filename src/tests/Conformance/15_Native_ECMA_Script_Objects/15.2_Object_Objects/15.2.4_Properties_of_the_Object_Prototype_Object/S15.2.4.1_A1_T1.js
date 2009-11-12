// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.1_A1_T1;
* @section: 15.2.4.1;
* @assertion: The initial value of Object.prototype.constructor is the built-in Object constructor;
* @description: Checking the Object.prototype.constructor;
*/

//CHECK#1
if (Object.prototype.constructor !== Object) {
  $ERROR('#1: The initial value of Object.prototype.constructor is the built-in Object constructor');
}
