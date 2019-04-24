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
const loopWithForOf = (staffArray) => {
    const emailArray = []
    for (let person of staffArray) {
        emailArray.push(makeEmailObj(person))
    }
    return emailArray
}
const loopWithForIn = (staffArray) => {
    const emailArray = []
    // for...in iterates over the object's properties,
    // i.e. the array's indices
    for (let i in staffArray) {
        emailArray.push(makeEmailObj(staffArray[i]))
    }
    return emailArray
}
// and before this comment ---


console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);
// console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

console.log('\n-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
// console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);