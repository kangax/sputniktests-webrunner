// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.2.1_A1_T2;
* @section: 15.3.2.1, 13.2;
* @assertion: When the Function constructor is called with one argument then body be that argument and the following steps are taken:
* i) Call ToString(body)
* ii) If P is not parsable as a FormalParameterListopt then throw a SyntaxError exception
* iii) If body is not parsable as FunctionBody then throw a SyntaxError exception
* iv) Create a new Function object as specified in 13.2 with parameters specified by parsing P as a FormalParameterListopt and body specified by parsing body as a FunctionBody. 
* Pass in a scope chain consisting of the global object as the Scope parameter
* v) Return Result(iv);
* @description: The body of the function is "{toString:function(){return "return 1;";}}";
*/

body={toString:function(){return "return 1;";}}

//CHECK#1
try {
  f = new Function(body);	
} catch (e) {
  $FAIL('#1: test failed with error '+e);
}

//CHECK#2
if (f.constructor !== Function) {
  $ERROR('#2: When the Function constructor is called with one argument then body be that argument and creates a new Function object as specified in 13.2');
}

//CHECK#3
if (f()!==1) {
  $ERROR('#3: hen the Function constructor is called with one argument then body be that argument the following steps are taken...');
}
