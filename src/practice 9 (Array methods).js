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




// ----------------------------------
// 1. write a function to receive the 'data' array and return the total of balances

// NOTE:
// The following CANNOT work because the accumulator returned from the first
// iteration is of type Number, and has no '.balance' property
//
// It should be possible to get around this by supplying the reduce callback
// with a starting value of 0, and treating the accumulator as the Number that
// it is, inside the reduce callback
const totalBalanceDoesNotWork = (objArray) => {
    return objArray.reduce((acc, cur) => {
        console.log(`acc: ${acc} (${typeof acc}), cur: ${cur.balance} (${typeof cur})`)
        return acc.balance + cur.balance
    })
}
// console.log(`total balance: ${totalBalanceDoesNotWork(data.staff)}`)

const totalValue = (objArray, key) => 
    objArray.reduce((acc, cur) => acc + cur[key], 0)

console.log(`total balance: ${totalValue(data.staff, 'balance')}`)




// ----------------------------------
// 2. create a table of objects of people having name and age
// 3. write a function to receive the above array and return total of the ages

const millenials = {
	hipsters: [
		{fname:"Jest", lname:"Six9ine", age:22},
		{fname:"Leith", lname:"Henry", age:25},
		{fname:"Everest", lname:"Jira", age:27},
		{fname:"Osprey", lname:"North", age:29},
		{fname:"North", lname:"West", age:31},
		{fname:"West", lname:"Lake", age:33},
		{fname:"Boniver", lname:"Amber", age:37},
	]
}
console.log(`total age: ${totalValue(millenials.hipsters, 'age')}`)




// ----------------------------------
// 4. write a function to receive the above array and average the ages

const averageValue = (objArray, key) => 
    (totalValue(objArray, key) / objArray.length)

console.log(`average age: ${averageValue(millenials.hipsters, 'age').toFixed(2)}`)




// Understand the documentation. Now that we have a few arrays let’s practise using the following:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex






// -------------------------------------------------
// More Array Exercises (Really) - March 28, 2019

import {assertEquals} from './practice 3 (assertEquals)'

let largeBalances = data.staff.filter(person => person.balance >= 1000)

assertEquals(largeBalances[0].fname, "Liam")
assertEquals(largeBalances[1].fname, "Emma")





// -------------------------------------------------
// More Array Exercises (you’re freaking kidding me) - March 29, 2019

let tot = data.staff.reduce((acc, cur, i, staffArray) => {
    return acc + cur.balance
}, 0)

assertEquals(tot, 3823)

// -------------------------------------------------
