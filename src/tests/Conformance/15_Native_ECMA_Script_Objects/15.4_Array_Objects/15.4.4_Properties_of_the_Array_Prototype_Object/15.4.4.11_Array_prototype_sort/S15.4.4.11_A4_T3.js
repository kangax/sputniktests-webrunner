// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.11_A4_T3;
 * @section: 15.4.4.11;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length = -4294967294; 
*/

var obj = {};
obj.sort = Array.prototype.sort;
obj[0] = "z";
obj[1] = "y";
obj[2] = "x";
obj.length = -4294967294;

//CHECK#1
if (obj.sort() !== obj) {
  $ERROR('#1: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort() === obj. Actual: ' + (obj.sort()));
}

//CHECK#2
if (obj.length !== -4294967294) {
  $ERROR('#2: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort(); obj.length === -4294967294. Actual: ' + (obj.length));
}

//CHECK#3
if (obj[0] !== "y") {
  $ERROR('#3: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort(); obj[0] === "y". Actual: ' + (obj[0]));
}   

//CHECK#4
if (obj[1] !== "z") {
  $ERROR('#4: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort(); obj[1] === "z". Actual: ' + (obj[1]));
} 

//CHECK#5
if (obj[2] !== "x") {
  $ERROR('#5: var obj = {}; obj.sort = Array.prototype.sort; obj[0] = "z"; obj[1] = "y"; obj[2] = "x"; obj.length = -4294967294; obj.sort(); obj[2] === "x". Actual: ' + (obj[2]));
}  
