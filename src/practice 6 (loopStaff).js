import {assertEquals} from './practice 3 (assertEquals)'
import {makeEmailObj} from './practice 5 (makeEmailObj)'

const path = require('path');
console.log(`\n----- Executing file: ${path.basename(__filename)}-----\n`)

const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
}


// Write the function after this comment ---
const loopStaff = (staffArray) => {
    const emailArray = []
    staffArray.forEach(person => {
        emailArray.push(makeEmailObj(person))
    })
    return emailArray
}
// and before this comment ---


const staffEmail = loopStaff(data.staff)
// console.log(staffEmail)
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0])
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3])
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6])