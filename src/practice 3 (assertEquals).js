const path = require('path');
console.log(`\n----- Executing file: ${path.basename(__filename)}-----\n`)

/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/


// Write the function after this comment ---
const assertEquals = (a, b)  => {
    if (a === b) {
        console.log(`ok -> ${a}`)
        return true
    } 
    console.log(`*** the two values are not the same:
                    p1 --> ${a}
                    p2 --> ${b}`)
}
export {assertEquals}
//----------------------------



// and before this comment ---

assertEquals("a","b")
assertEquals("a","a")
assertEquals(1,2)
assertEquals(2,2)
assertEquals("2",2)
assertEquals("This value","This value")

