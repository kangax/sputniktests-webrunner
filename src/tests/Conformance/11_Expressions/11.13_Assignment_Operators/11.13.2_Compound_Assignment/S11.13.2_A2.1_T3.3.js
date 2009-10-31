// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A2.1_T3.3;
 * @section: 11.13.2;
 * @assertion: Operator uses GetValue; 
 * @description: If GetBase(LeftHandSideExpression) is null, throw ReferenceError. Check operator is "x %= y";
*/

//CHECK#1
try {
  var z = (x %= 1);
  $ERROR('#1.1: x %= 1 throw ReferenceError. Actual: ' + (z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x %= 1 throw ReferenceError. Actual: ' + (e));  
  }
}
