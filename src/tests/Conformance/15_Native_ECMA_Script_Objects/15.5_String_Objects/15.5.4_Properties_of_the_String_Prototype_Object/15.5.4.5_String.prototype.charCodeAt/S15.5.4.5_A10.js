// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.5_A10;
* @section: 15.5.4.5;
* @assertion: The String.prototype.charCodeAt.length property has the attribute ReadOnly;
* @description: Checking if varying the String.prototype.charCodeAt.length property fails;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.charCodeAt.hasOwnProperty('length'))) {
  $ERROR('#1: String.prototype.charCodeAt.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.charCodeAt.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////

__obj = String.prototype.charCodeAt.length;

String.prototype.charCodeAt.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.charCodeAt.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.charCodeAt.length; String.prototype.charCodeAt.length = function(){return "shifted";}; String.prototype.charCodeAt.length === __obj. Actual: '+String.prototype.charCodeAt.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////
