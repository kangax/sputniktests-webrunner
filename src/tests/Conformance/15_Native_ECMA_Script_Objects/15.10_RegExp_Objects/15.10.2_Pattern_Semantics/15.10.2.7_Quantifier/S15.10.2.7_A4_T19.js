// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A4_T19;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: * evaluates by returning the two results 0 and \infty;
* @description: Execute /bc..[\d]*[\s]* /.exec('abcdef') and check results;
*/

__executed = /bc..[\d]*[\s]*/.exec('abcdef');

__expected = ["bcde"];
__expected.index = 1;
__expected.input = 'abcdef';

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /bc..[\\d]*[\\s]*/.exec(\'abcdef\'); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /bc..[\\d]*[\\s]*/.exec(\'abcdef\'); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /bc..[\\d]*[\\s]*/.exec(\'abcdef\'); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /bc..[\\d]*[\\s]*/.exec(\'abcdef\'); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}

