// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.6_A10;
* @section: 15.2.4.6;
* @assertion: The Object.prototype.isPrototypeOf.length property has the attribute ReadOnly;
* @description: Checking if varying the Object.prototype.isPrototypeOf.length property fails;
*/

//CHECK#1
if (!(Object.prototype.isPrototypeOf.hasOwnProperty('length'))) {
  $FAIL('#1: the Object.prototype.isPrototypeOf has length property');
}

obj = Object.prototype.isPrototypeOf.length;

Object.prototype.isPrototypeOf.length = function(){return "shifted";};

//CHECK#2
if (Object.prototype.isPrototypeOf.length !== obj) {
  $ERROR('#2: the Object.prototype.isPrototypeOf length property has the attributes ReadOnly');
}
