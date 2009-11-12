// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A2_T10;
* @section: 15.5.4.10, 15.10.6.2;
* @assertion: match returns array as specified in 15.10.6.2;
* @description: Regular expression is /([\d]{5})([-\ ]?[\d]{4})?$/. Last match is undefined. 
* And regular expression object have property lastIndex = tested_string.lastIndexOf("0");
*/

__string = "Boston, MA 02134";

__matches=["02134", "02134", undefined];

__re = /([\d]{5})([-\ ]?[\d]{4})?$/;

__re.lastIndex = __string.lastIndexOf("0");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__string.match(__re).length!== 3) {
  $ERROR('#1: __string.match(__re).length=== 3. Actual: '+__string.match(__re).length);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__string.match(__re).index !==__string.lastIndexOf("0")) {
  $ERROR('#2: __string.match(__re).index ===__string.lastIndexOf("0"). Actual: '+__string.match(__re).index );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
for(var mi=0; mi<__matches.length; mi++) {
  if (__string.match(__re)[mi]!==__matches[mi]) {
    $ERROR('#3.'+mi+': __string.match(__re)['+mi+']===__matches['+mi+']. Actual: '+__string.match(__re)[mi]);
  }
}
//
//////////////////////////////////////////////////////////////////////////////
