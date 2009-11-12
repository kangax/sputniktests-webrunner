// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.5_A2_T1;
* @section: 15.5.5;
* @assertion: String instance has not [[construct]] property;
* @description: Create new string object and try new created_string;
*/

__str = new Object("");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  new __str;
  $FAIL('#1: __str = new Object(""); "new __str" lead to throwing exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: Exception is instance of TypeError. Actual: exception is '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////
