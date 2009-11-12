// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A2_T4;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end) returns a string value(not object);
* @description: start is Infinity, end is NaN;
*/

__string = new String("this is a string object");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.slice(Infinity, NaN) !== "") {
  $ERROR('#1: __string = new String("this is a string object"); __string.slice(Infinity, NaN) === "". Actual: '+__string.slice(Infinity, NaN) );
}
//
//////////////////////////////////////////////////////////////////////////////
