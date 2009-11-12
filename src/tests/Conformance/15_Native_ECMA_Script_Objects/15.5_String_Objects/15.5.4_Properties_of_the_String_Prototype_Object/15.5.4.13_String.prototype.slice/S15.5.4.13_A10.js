// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A10;
* @section: 15.5.4.13;
* @assertion: The String.prototype.slice.length property has the attribute ReadOnly;
* @description: Checking if varying the String.prototype.slice.length property fails;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.slice.hasOwnProperty('length'))) {
  $FAIL('#1: String.prototype.slice.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.slice.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

__obj = String.prototype.slice.length;

String.prototype.slice.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.slice.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.slice.length; String.prototype.slice.length = function(){return "shifted";}; String.prototype.slice.length === __obj. Actual: '+String.prototype.slice.length );
}
//
//////////////////////////////////////////////////////////////////////////////
