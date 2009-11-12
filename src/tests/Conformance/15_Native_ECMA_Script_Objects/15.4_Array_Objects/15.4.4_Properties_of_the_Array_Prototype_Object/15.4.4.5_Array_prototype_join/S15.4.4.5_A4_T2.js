// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.5_A4_T2;
 * @section: 15.4.4.5;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length = 4294967297; 
*/

var obj = {};
obj.join = Array.prototype.join;
obj[0] = "x";
obj[1] = "y";
obj[4294967296] = "z";
obj.length = 4294967297;

//CHECK#1
if (obj.join("") !== "x") {
  $ERROR('#1: var obj = {}; obj.join = Array.prototype.join; obj[0] = "x"; obj[1] = "y"; obj[4294967296] = "z"; obj.length = 4294967297; obj.join("") === "x". Actual: ' + (obj.join("")));
}

//CHECK#2
if (obj.length !== 4294967297) {
  $ERROR('#2: var obj = {}; obj.join = Array.prototype.join; obj[0] = "x"; obj[1] = "y"; obj[4294967296] = "z"; obj.length = 4294967297; obj.join(""); obj.length === 4294967297. Actual: ' + (obj.length));
}
