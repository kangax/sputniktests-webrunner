// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.4_D2.6;
 * @section: 8.4, 15.5, 7.8.4;
 * @assertion: Engines implements array like access to string elemenths,
 * If index of elementh is greater or equals than string length an undefined returns;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#
str='asdfghjkl';

var char__ =str[99];
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof char__!== 'undefined') {
  $ERROR('#1: If index of elementh is greater or equals than string length an emty string returns');
}
//
//////////////////////////////////////////////////////////////////////////////
