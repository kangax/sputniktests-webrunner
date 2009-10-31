// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.5_A1_T4;
* @section: 15.10.2.5;
* @assertion: An Atom followed by a Quantifier is repeated the number of times specified by the Quantifier;
* @description: Execute /(z)((a+)?(b+)?(c))* /.exec("zaacbbbcac") and check results;
*/

__executed = /(z)((a+)?(b+)?(c))*/.exec("zaacbbbcac");

__expected = ["zaacbbbcac", "z", "ac", "a", undefined, "c"];
__expected.index = 0;
__expected.input = "zaacbbbcac";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(z)((a+)?(b+)?(c))*/.exec("zaacbbbcac"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(z)((a+)?(b+)?(c))*/.exec("zaacbbbcac"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(z)((a+)?(b+)?(c))*/.exec("zaacbbbcac"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(z)((a+)?(b+)?(c))*/.exec("zaacbbbcac"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}

