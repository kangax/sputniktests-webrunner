// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.5_A8_T5;
 * @section: 11.9.5, 11.9.6;
 * @assertion: If Type(x) is different from Type(y), return true;   
 * @description: Checking such x and y that either x or y is primitive string and the other is primitive number; 
*/

//CHECK#1
try {
  throw 1;
} catch(e) {
  if (!(e !== "1")) {
    $ERROR('#1: throw 1 !== "1"');
  }
}

//CHECK#2
try {
  throw "1";
} catch(e) {
  if (!(1 !== e)) {
    $ERROR('#2: 1 !== throw "1"');
  }
} 
