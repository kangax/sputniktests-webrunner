// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.4_A1.1;
* @section: 15.5.4.4, 13.2;
* @assertion: String.prototype.charAt() can accept many arguments;
* @description: Checking by using eval;
*/

function __FACTORY(){this.toString = function(){ return "wizard";};};

__FACTORY.prototype.charAt = String.prototype.charAt;

__instance = new __FACTORY;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__instance){
  if (__instance.charAt(eval("1"),true,null,{})!== "i") {
    $ERROR('#1: __instance.charAt(eval("1"),true,null,{})=== "i". Actual: '+__instance.charAt(eval("1"),true,null,{})); 
  }
}
//
//////////////////////////////////////////////////////////////////////////////

