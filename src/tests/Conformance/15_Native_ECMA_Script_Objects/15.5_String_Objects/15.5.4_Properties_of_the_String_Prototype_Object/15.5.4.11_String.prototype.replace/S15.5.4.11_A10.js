// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A10;
* @section: 15.5.4.11;
* @assertion: The String.prototype.replace.length property has the attribute ReadOnly;
* @description: Checking if varying the String.prototype.replace.length property fails;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.replace.hasOwnProperty('length'))) {
  $FAIL('#1: String.prototype.replace.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.replace.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

__obj = String.prototype.replace.length;

String.prototype.replace.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.replace.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.replace.length; String.prototype.replace.length = function(){return "shifted";}; String.prototype.replace.length === __obj. Actual: '+String.prototype.replace.length );
}
//
//////////////////////////////////////////////////////////////////////////////
