// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.11_A2.2_T2;
 * @section: 15.4.4.11;
 * @assertion: My comparefn is inverse implementation comparefn; 
 * @description: Checking RUSSIAN ALPHABET; 
*/

alphabetR = ["ё", "я", "ю", "э", "ь", "ы", "ъ", "щ", "ш", "ч", "ц", "х", "ф", "у", "т", "с", "р", "П", "О", "Н", "М", "Л", "К", "Й", "И", "З", "Ж", "Е", "Д", "Г", "В", "Б", "А"];
 alphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", "ё"];

var myComparefn = function(x,y) {
  xS = String(x);
  yS = String(y);
  if (xS < yS) return 1
  if (xS > yS) return -1;   
  return 0;
}

//CHECK#1
alphabet.sort(myComparefn);
result = true;
for (i = 0; i < 26; i++) {
  if (alphabetR[i] !== alphabet[i]) result = false;
}

if (result !== true) {
  $ERROR('#1: CHECK RUSSIAN ALPHABET');
}
