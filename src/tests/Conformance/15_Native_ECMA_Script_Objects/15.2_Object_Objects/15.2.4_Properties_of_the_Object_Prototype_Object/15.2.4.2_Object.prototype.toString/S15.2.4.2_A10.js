// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.2_A10;
* @section: 15.2.4.2;
* @assertion: The Object.prototype.toString.length property has the attribute ReadOnly;
* @description: Checking if varying the Object.prototype.toString.length property fails;
*/

//CHECK#1
if (!(Object.prototype.toString.hasOwnProperty('length'))) {
  $FAIL('#1: the Object.prototype.toString has length property.');
}

obj = Object.prototype.toString.length;

Object.prototype.toString.length = function(){return "shifted";};

//CHECK#2
if (Object.prototype.toString.length !== obj) {
  $ERROR('#2: the Object.prototype.toString length property has the attributes ReadOnly.');
}
