// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.7_A1_T4;
* @section: 12.7;
* @assertion: Appearing of continue without an IterationStatement leads to syntax error;
* @description: Checking if execution of "continue" with no IterationStatement, placed into a block, fails;
* @negative;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
{
    var x=1;
    continue;
    var y=2;
}
//
//////////////////////////////////////////////////////////////////////////////

