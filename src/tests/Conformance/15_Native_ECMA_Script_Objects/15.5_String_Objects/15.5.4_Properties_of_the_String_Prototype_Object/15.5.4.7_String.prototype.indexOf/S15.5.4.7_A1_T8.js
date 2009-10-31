// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A1_T8;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf(searchString, position);
* @description: Call indexOf(searchString, position) function with void 0 argument of string object;
*/

__obj = {toString:function(){}};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(void 0) evaluates to "undefined" indexOf(void 0) evaluates to indexOf("undefined")
if (String(__obj).indexOf(void 0) !== 0) {
  $ERROR('#1: __obj = {toString:function(){}}; String(__obj).indexOf(void 0) === 0. Actual: '+String(__obj).indexOf(void 0) ); 
}
//
//////////////////////////////////////////////////////////////////////////////
