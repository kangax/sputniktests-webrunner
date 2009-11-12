// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A2_T3;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end) returns a string value(not object);
* @description: Call slice from empty String object;
*/

__string = new String("");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.slice(1,0) !== "") {
  $ERROR('#1: __string = new String(""); __string.slice(1,0) === "". Actual: '+__string.slice(1,0) );
}
//
//////////////////////////////////////////////////////////////////////////////
