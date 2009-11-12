// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.3_A5.2;
 * @section: 15.1.3.3, 15.2.4.5, 11.4.1;
 * @assertion: The length property of encodeURI has the attribute DontDelete;
 * @description: Checking use hasOwnProperty, delete;
*/

//CHECK#1
if (encodeURI.hasOwnProperty('length') !== true) {
  $FAIL('#1: encodeURI.hasOwnProperty(\'length\') === true. Actual: ' + (encodeURI.hasOwnProperty('length')));
}

delete encodeURI.length;

//CHECK#2
if (encodeURI.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete encodeURI.length; encodeURI.hasOwnProperty(\'length\') === true. Actual: ' + (encodeURI.hasOwnProperty('length')));
}

//CHECK#3
if (encodeURI.length === undefined) {
  $ERROR('#3: delete encodeURI.length; encodeURI.length !== undefined');
}



