// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A6.1_T3;
 * @section: 7.9, 12.6.3;
 * @assertion: Check For Statement for automatic semicolon insertion; 
 * @description: for (\n two semicolons \n);
*/

//CHECK#1
for(
    ;;
) {
  break;
}
