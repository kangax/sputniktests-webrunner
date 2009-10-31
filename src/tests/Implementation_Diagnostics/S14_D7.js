// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S14_D7;
* @section: 14;
* @assertion: Function declaration may be inside of "with" block ;
*/

BANNER="union jack";

a=1;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __func !== "function") {
	$ERROR('1: Function declaration may be inside of "with" block');
}
//
//////////////////////////////////////////////////////////////////////////////

__obj={a:2};

with(__obj){
    function __func(){return a;};
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__func() !== 1) {
	$ERROR('2: Function declaration may be inside of "with" block ');
}
//
//////////////////////////////////////////////////////////////////////////////

__obj.a=BANNER;

with(__obj){
    //////////////////////////////////////////////////////////////////////////////
    //CHECK#3
    if (__func() !== "union jack") {
	   $ERROR('3: Function declaration may be inside of "with" block ');
    }
    //
    ////////////////////////////////////////////////////////////////////////////// 
}


