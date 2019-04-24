"use strict";

var _practice1MakeEmail = require("./practice 1 (makeEmail)");

var _practice3AssertEquals = require("./practice 3 (assertEquals)");

/*	
    Write the function to format an email based on an array
    NOTE: assuming that the array will contain at least two strings
*/
// Write the function after this comment ---
function makeEmailArr(nameArray) {
  return (0, _practice1MakeEmail.makeEmail)(nameArray[0], nameArray[1]);
} // and before this comment ---
//----------------------------


var arrayLarry = ['larry', 'shumlich'];
(0, _practice3AssertEquals.assertEquals)('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
(0, _practice3AssertEquals.assertEquals)('bill.smith@evolveu.com', makeEmailArr(['bill', 'smith']));
(0, _practice3AssertEquals.assertEquals)('amy.jones@evolveu.ca', makeEmailArr(['amy', 'jones']));