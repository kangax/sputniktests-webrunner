// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.5_A9;
* @section: 15.2.4.5;
* @assertion: The Object.prototype.hasOwnProperty.length property has the attribute DontDelete;
* @description: Checking if deleting the Object.prototype.hasOwnProperty.length property fails;
*/

//CHECK#0
if (!(Object.prototype.hasOwnProperty.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.hasOwnProperty has length property');
}

//CHECK#1
if (delete Object.prototype.hasOwnProperty.length) {
  $ERROR('#1: The Object.prototype.hasOwnProperty.length property has the attributes DontDelete');
}

//CHECK#2
if (!(Object.prototype.hasOwnProperty.hasOwnProperty('length'))) {
  $FAIL('#2: The Object.prototype.hasOwnProperty.length property has the attributes DontDelete');
}
