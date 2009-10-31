// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.5_A1;
 * @section: 15.8.1.5;
 * @assertion: Math.LOG10E is approximately 0.4342944819032518;
 * @description: Comparing Math.LOG10E with 0.4342944819032518;
 */
$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Math.LOG10E, 0.4342944819032518)) {
  $ERROR('#1: \'Math.LOG10E is not approximatley equal to  0.4342944819032518\'');
}
