"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEmailObj = void 0;

var _practice3AssertEquals = require("./practice 3 (assertEquals)");

/*	
	Write the function to format an email based on an object / map
*/
// Write the function after this comment ---
var makeEmailObj = function makeEmailObj(nameObj) {
  var fname = nameObj.fname,
      lname = nameObj.lname;
  return "".concat(fname, ".").concat(lname, "@evolveu.ca");
}; // and before this comment ---
//----------------------------


exports.makeEmailObj = makeEmailObj;
var arrayLarry = {
  fname: 'larry',
  lname: 'shumlich' // assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(arrayLarry))
  // assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}))
  // assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}))

};