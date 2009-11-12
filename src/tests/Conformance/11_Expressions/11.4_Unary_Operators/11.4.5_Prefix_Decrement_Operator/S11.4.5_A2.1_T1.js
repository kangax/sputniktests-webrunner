// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.5_A2.1_T1;
* @section: 11.4.5, 11.6.3;
* @assertion: Operator --x uses GetValue and PutValue;
* @description: Type(x) is Reference and GetBase(x) is not null;
*/

//CHECK#1
var x = 1;
if (--x !== 1 - 1) {
  $ERROR('#1: var x = 1; --x === 1 - 1. Actual: ' + (--x));
} else {
  if (x !== 1 - 1) {
    $ERROR('#1: var x = 1; --x; x === 1 - 1. Actual: ' + (x));
  } 
}

//CHECK#2
this.x = 1;
if (--this.x !== 1 - 1) {
  $ERROR('#2: this.x = 1; --this.x === 1 - 1. Actual: ' + (--this.x));
} else {
  if (this.x !== 1 - 1) {
    $ERROR('#2: this.x = 1; --this.x; this.x === 1 - 1. Actual: ' + (this.x));
  } 
}

//CHECK#3
var object = new Object();
object.prop = 1;
if (--object.prop !== 1 - 1) {
  $ERROR('#3: var object = new Object(); object.prop = 1; --object.prop === 1 - 1. Actual: ' + (--object.prop));
} else {
  if (this.x !== 1 - 1) {
    $ERROR('#3: var object = new Object(); object.prop = 1; --object.prop; object.prop === 1 - 1. Actual: ' + (object.prop));
  } 
}
