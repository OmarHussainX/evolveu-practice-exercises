import {makeEmail} from './practice 1 (makeEmail)'
import {assertEquals} from './practice 3 (assertEquals)'


/*	
    Write the function to format an email based on an array
    NOTE: assuming that the array will contain at least two strings
*/
// Write the function after this comment ---
function makeEmailArr(nameArray) {
    return makeEmail(nameArray[0], nameArray[1])
}

// and before this comment ---
//----------------------------


const arrayLarry = ['larry', 'shumlich']
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry))
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']))
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']))






