// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.1_A1_T1;
* @section: 15.5.4.1;
* @assertion: The initial value of String.prototype.constructor is the built-in String constructor;
* @description: Checking String.prototype.constructor;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.constructor !== String) {
  $ERROR('#1: String.prototype.constructor === String. Actual: String.prototype.constructor ==='+String.prototype.constructor ); 
}
//
//////////////////////////////////////////////////////////////////////////////
