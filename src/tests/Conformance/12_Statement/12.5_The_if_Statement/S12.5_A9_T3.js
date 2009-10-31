// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A9_T3;
* @section: 12.5;
* @assertion: Function declaration within an "if" statement is not allowed;
* @description: Declaring function within an "if" statement that is declared within the function declaration;
* @negative;
*/

function(){

if (true) {
    function __func(){};
} else {
    function __func(){};
}

};
