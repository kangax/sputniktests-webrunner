// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A10;
* @section: 15.5.4.15;
* @assertion: The String.prototype.substring.length property has the attribute ReadOnly;
* @description: Checking if varying the String.prototype.substring.length property fails;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.substring.hasOwnProperty('length'))) {
  $FAIL('#1: String.prototype.substring.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.substring.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

__obj = String.prototype.substring.length;

String.prototype.substring.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.substring.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.substring.length; String.prototype.substring.length = function(){return "shifted";}; String.prototype.substring.length === __obj. Actual: '+String.prototype.substring.length );
}
//
//////////////////////////////////////////////////////////////////////////////
