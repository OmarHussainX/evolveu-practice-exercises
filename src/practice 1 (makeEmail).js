const path = require('path');
console.log(`\n----- Executing file: ${path.basename(__filename)}-----\n`)

/*
	--- make me an email
	Write the function that will make this code work.
*/
// console.log("Make me an Email")

// ---- put function here ----
export const makeEmail = (firstName, lastName) => `${firstName}.${lastName}@evolveu.ca`
//----------------------------



const larryEmail = makeEmail('larry', 'shumlich')
const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca'

if (larryEmail != shouldBeLarryEmail) {
	console.log("***** We have an error here *****",
		larryEmail,
		" is not = ",
		shouldBeLarryEmail,
		" and it should be."
	)
}


console.log("Larry:", larryEmail)

console.log("Jane:", makeEmail("jane", "lee"))
console.log("Bill:", makeEmail("jane", "lee"))
console.log("Sam:", makeEmail("jane", "lee"))


