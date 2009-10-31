// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.6.3_A2;
* @section: 15.6.3;
* @assertion: The value of the internal [[Prototype]] property of the Boolean 
* constructor is the Function prototype object;
* @description: Checking prototype of the Boolean constructor;
*/

//CHECK#1
if (!(Function.prototype.isPrototypeOf(Boolean))) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Boolean constructor is the Function prototype object.');
}
