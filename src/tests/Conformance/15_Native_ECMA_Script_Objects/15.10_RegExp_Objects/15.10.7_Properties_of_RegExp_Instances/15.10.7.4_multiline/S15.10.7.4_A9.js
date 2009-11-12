// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.7.4_A9;
* @section: 15.10.7.4;
* @assertion: The RegExp instance multiline property has the attribute DontDelete;
* @description: Checking if deleting the multiline property fails;
*/

__re = new RegExp;

//CHECK#0
if (__re.hasOwnProperty('multiline') !== true) {
  $FAIL('#0: __re = new RegExp; __re.hasOwnProperty(\'multiline\') === true');
}

//CHECK#1
if ((delete __re.multiline) !== false) {
  $ERROR('#1: __re = new RegExp; (delete __re.multiline) === false');
}

//CHECK#2
if (__re.hasOwnProperty('multiline') !== true) {
  $ERROR('#2: __re = new RegExp;delete __re.multiline === true; __re.hasOwnProperty(\'multiline\') === true');
}

