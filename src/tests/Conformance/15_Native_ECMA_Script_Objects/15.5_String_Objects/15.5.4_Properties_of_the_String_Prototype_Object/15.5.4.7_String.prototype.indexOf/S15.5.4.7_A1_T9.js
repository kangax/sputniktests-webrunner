// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A1_T9;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf(searchString, position);
* @description: Call indexOf(searchString, position) function with function(){}() argument of string object;
*/

__obj = {
    valueOf:function(){},
    toString:void 0
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "undefined" indexOf(undefined) evaluates to indexOf("undefined")
if (new String(__obj).indexOf(function(){}()) !== 0) {
  $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; new String(__obj).indexOf(function(){}()) === 0. Actual: '+new String(__obj).indexOf(function(){}()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////
