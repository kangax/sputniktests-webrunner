// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4_A1.1_T8;
 * @section: 15.4, 11.2.1;
 * @assertion: A property name P (in the form of a string value) is an array index
 * if and only if ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal to 2^32 - 1;
 * @description: Checking for Number object; 
*/

//CHECK#1
x = [];
x[new String("0")] = 0;
if (x[0] !== 0) {
  $ERROR('#1: x = []; x[new String("0")] = 0; x[0] === 0. Actual: ' + (x[0]));  
} 

//CHECK#2
y = [];
y[new String("1")] = 1;
if (y[1] !== 1) {
  $ERROR('#2: y = []; y[new String("1")] = 1; y[1] === 1. Actual: ' + (y[1]));  
}

//CHECK#3
z = [];
z[new String("1.1")] = 1;
if (z["1.1"] !== 1) {
  $ERROR('#3: z = []; z[new String("1.1")] = 1; z["1.1"] === 1. Actual: ' + (z["1.1"]));  
}  
