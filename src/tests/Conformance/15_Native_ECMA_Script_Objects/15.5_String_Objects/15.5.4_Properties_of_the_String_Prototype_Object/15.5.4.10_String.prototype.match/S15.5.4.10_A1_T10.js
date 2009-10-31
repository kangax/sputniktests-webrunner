// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A1_T10;
* @section: 15.5.4.10;
* @assertion: String.prototype.match (regexp);
* @description: Call match (regexp) function with object argument;
*/

var __obj = {toString:function(){return "\u0041B";}}
var __str = "ABB\u0041BABAB";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    if (match(__obj)[0] !=="AB") {
      $ERROR('#1: var x; var __obj = {toString:function(){return "\u0041B";}}; var __str = "ABB\u0041BABAB"; match(__obj)[0] ==="AB". Actual: '+match(__obj)[0] );
    }
}
//
//////////////////////////////////////////////////////////////////////////////

var x;
