// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.9_A5.7;
* @section: 15.4.4.9, 11.2.2;
* @assertion: The shift property of Array can't be used as constructor;
* @description: If property does not implement the internal [[Construct]] method, throw a TypeError exception;
*/

//CHECK#1

try {
  new Array.prototype.shift();
  $ERROR('#1.1: new Array.prototype.shift() throw TypeError. Actual: ' + (new Array.prototype.shift()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new Array.prototype.shift() throw TypeError. Actual: ' + (e));
  }
}
