// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A3_T5;
* @section: 15.10.2.6;
* @assertion: The production Assertion :: \b evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...;
* @description: Execute /so\b/.test("pilot\nsoviet robot\topenoffice") and check results;
*/

__executed = /so\b/.test("pilot\nsoviet robot\topenoffice");

//CHECK#1
if (__executed) {
	$ERROR('#1: /so\\b/.test("pilot\\nsoviet robot\\topenoffice") === false');
}

