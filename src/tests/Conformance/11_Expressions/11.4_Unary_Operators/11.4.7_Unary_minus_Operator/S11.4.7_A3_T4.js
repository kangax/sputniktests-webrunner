// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.7_A3_T4;
* @section: 11.4.7;
* @assertion: Operator -x returns -ToNumber(x);
* @description: Type(x) is undefined or null;
*/

//CHECK#1
if (isNaN(-void 0) !== true) {
  $ERROR('#1: +void 0 === Not-a-Number. Actual: ' + (+void 0));
}

//CHECK#2
if (-null !== 0) {
  $ERROR('#2: +null === 0. Actual: ' + (+null));
}
