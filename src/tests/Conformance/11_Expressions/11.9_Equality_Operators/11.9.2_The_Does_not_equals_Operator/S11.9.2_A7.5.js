// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.2_A7.5;
 * @section: 11.9.2, 11.9.3;
 * @assertion: If Type(x) is Number and Type(y) is Object, 
 * return x != ToPrimitive(y);
 * @description: y is object, x is primitive number;
 */

//CHECK#1
if ((1 != new Boolean(true)) !== false) {
  $ERROR('#1: (1 != new Boolean(true)) === false');
}

//CHECK#2
if ((-1 != new Number(-1)) !== false) {
  $ERROR('#2: (-1 != new Number(-1)) === false');
}

//CHECK#3
if ((-1 != new String("-1")) !== false) {
  $ERROR('#3: (-1 != new String("-1")) === false');
}
