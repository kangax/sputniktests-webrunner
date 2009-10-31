// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A3_T14;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: + evaluates by returning the two results 1 and \infty;
* @description: Execute /b*b+/.exec("abbbbbbbc") and check results;
*/

__executed = /b*b+/.exec("abbbbbbbc");

__expected = ["bbbbbbb"];
__expected.index = 1;
__expected.input = "abbbbbbbc";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /b*b+/.exec("abbbbbbbc"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /b*b+/.exec("abbbbbbbc"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /b*b+/.exec("abbbbbbbc"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /b*b+/.exec("abbbbbbbc"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}

