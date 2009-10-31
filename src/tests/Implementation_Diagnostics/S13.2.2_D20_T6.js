// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_D20_T6;
* @section: 13.2.2;
* @assertion: function declaration inside of "with" statement is a fuction declaration inside of current execution context;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (typeof __func !== "function") {
	$ERROR('#0: function declaration inside of "with" statement is a fuction declaration inside of current execution context');
}
//
//////////////////////////////////////////////////////////////////////////////

var a = 1;

var __obj = {a:2};

with (__obj)
{
    while(0){
        function __func()
        {
            return a;
        }
    }
}

delete __obj;

var __obj = {a:3};

with (__obj)
{
    result = __func();
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (result !== 1) {
	$ERROR('#1: function declaration inside of "with" statement is a fuction declaration inside of current execution context');
}
//
//////////////////////////////////////////////////////////////////////////////
