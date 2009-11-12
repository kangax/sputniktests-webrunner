// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.1.1_A2;
 * @section: 15.6.1.1;
 * @assertion: Boolean() returns false;
 * @description: Call Boolean() and check result;
*/

//CHECK#1
if( typeof Boolean() !== "boolean" ) {
  $ERROR('#1: typeof Boolean() should be "boolean", actual is "'+typeof Boolean()+'"');
}

//CHECK#2
if( Boolean() !== false ) {
  $ERROR('#2: Boolean() should be false');
}
