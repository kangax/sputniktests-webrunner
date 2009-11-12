// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A2_T5;
* @section: 15.10.6.2;
* @assertion: A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is "RegExp";
* @description: The tested object is new Boolean(false);
*/

__instance = new Boolean(false);

__instance.exec = RegExp.prototype.exec;

//CHECK#1
with(__instance) {
  try {
   $ERROR('#1.1: __instance = new Boolean(false); __instance.exec = RegExp.prototype.exec; exec("message to investigate"). Actual: ' + (exec("message to investigate")));
  } catch (e) {
    if ((e instanceof TypeError !== true)) {
      $ERROR('#1.2: __instance = new Boolean(false); __instance.exec = RegExp.prototype.exec; exec("message to investigate"). Actual: ' + (e));
    }
  }  
}

