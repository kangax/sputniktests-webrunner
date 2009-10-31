// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.11.4.1_A1_T1;
* @section: 15.11.4.1, 16;
* @assertion: The initial value of Error.prototype.constructor is the built-in Error constructor;
* @description: Checking Error.prototype.constructor;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (Error.prototype.constructor !== Error) {
	$ERROR('#1: Error.prototype.constructor === Error. Actual: '+Error.prototype.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////
