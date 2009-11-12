// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.13_A2;
 * @section: 15.8.2.13;
 * @assertion: If y is +0, Math.pow(x,y) is 1, even if x is NaN;
 * @description: Checking if Math.pow(x,y) equals to 1, where y is +0 and x is number or NaN;
 */
 
// CHECK#1

y = +0;
x = new Array();
x[0] = -Infinity;
x[1] = -1.7976931348623157E308; //largest (by module) finite number
x[2] = -0.000000000000001;
x[3] = -0;
x[4] = +0
x[5] = 0.000000000000001;
x[6] = 1.7976931348623157E308; //largest finite number
x[7] = +Infinity;
x[8] = NaN;
xnum = 9;

for (i = 0; i < xnum; i++)
{
	if (Math.pow(x[i],y) !== 1)
	{
		$ERROR("#1: Math.pow(" + x[i] + ", " + y + ") !== 1");
	}
}
