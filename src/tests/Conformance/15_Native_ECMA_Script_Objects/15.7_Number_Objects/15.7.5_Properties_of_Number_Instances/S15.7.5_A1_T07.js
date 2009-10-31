// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.5_A1_T07;
 * @section: 15.7.5;
 * @assertion: Number instances have no special properties beyond those 
 * inherited from the Number prototype object;
 * @description: Checking property toPrecision;
*/

//CHECK#1
if((new Number()).hasOwnProperty("toPrecision") !== false){
  $ERROR('#1: Number instance must have no special property "toPrecision"');
}

//CHECK#2
if((new Number()).toPrecision !== Number.prototype.toPrecision){
  $ERROR('#2: Number instance property "toPrecision" must be inherited from Number prototype object');
}

