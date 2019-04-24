"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEmail = void 0;

/*
	--- make me an email
	Write the function that will make this code work.
*/
// console.log("Make me an Email")
// ---- put function here ----
var makeEmail = function makeEmail(firstName, lastName) {
  return "".concat(firstName, ".").concat(lastName, "@evolveu.ca");
}; //----------------------------


exports.makeEmail = makeEmail;
var larryEmail = makeEmail('larry', 'shumlich');
var shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

if (larryEmail != shouldBeLarryEmail) {
  console.log("***** We have an error here *****", larryEmail, " is not = ", shouldBeLarryEmail, " and it should be.");
} // console.log("Larry:", larryEmail)
// console.log("Jane:", makeEmail("jane", "lee"))
// console.log("Bill:", makeEmail("jane", "lee"))
// console.log("Sam:", makeEmail("jane", "lee"))