// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A1_T6;
* @section: 15.10.6.3;
* @assertion: Equivalent to the expression RegExp.prototype.exec(string) != null;
* @description: RegExp is /(z)((a+)?(b+)?(c))* / and tested string is (function(){return "zaacbbbcac"})();
*/

__re = /(z)((a+)?(b+)?(c))*/;

//CHECK#0
if (__re.test((function(){return "zaacbbbcac"})()) !== (__re.exec((function(){return "zaacbbbcac"})()) !== null)) {
	$ERROR('#0: __re = /(z)((a+)?(b+)?(c))*/; __re.test((function(){return "zaacbbbcac"})()) === (__re.exec((function(){return "zaacbbbcac"})()) !== null)');
}

