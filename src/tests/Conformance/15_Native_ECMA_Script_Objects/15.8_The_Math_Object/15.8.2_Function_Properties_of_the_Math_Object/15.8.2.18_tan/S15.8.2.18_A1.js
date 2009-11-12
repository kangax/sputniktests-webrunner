// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.18_A1;
 * @section: 15.8.2.18;
 * @assertion: If x is NaN, Math.tan(x) is NaN;
 * @description: Checking if Math.tan(NaN) is NaN;
 */
 
// CHECK#1
var x = NaN;
if (!isNaN(Math.tan(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.tan(x)) === false'");
}
