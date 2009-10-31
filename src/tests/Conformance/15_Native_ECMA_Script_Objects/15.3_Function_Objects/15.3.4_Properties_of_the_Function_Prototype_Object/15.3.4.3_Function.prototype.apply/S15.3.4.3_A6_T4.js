// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A6_T4;
* @section: 15.3.4.3;
* @assertion: if argArray is neither an array nor an arguments object (see 10.1.8), a TypeError exception is thrown;
* @description: argArray is (this,function(){return arguments;});
*/

//CHECK#1
try {
  Function().apply(this,function(){return arguments;});
  $FAIL('#1: if argArray is neither an array nor an arguments object (see 10.1.8), a TypeError exception is thrown');
} catch (e) {
  if (!(e instanceof TypeError)) {
  	$ERROR('#1.1: if argArray is neither an array nor an arguments object (see 10.1.8), a TypeError exception is thrown');
  }
}
