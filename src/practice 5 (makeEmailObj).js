import {assertEquals} from './practice 3 (assertEquals)'


/*	
	Write the function to format an email based on an object / map
*/
// Write the function after this comment ---
export const makeEmailObj = nameObj => {
    const {fname, lname} = nameObj
    return `${fname}.${lname}@evolveu.ca`
}

// and before this comment ---
//----------------------------


const arrayLarry = {fname:'larry', lname:'shumlich'}
// assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(arrayLarry))
// assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}))
// assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}))
