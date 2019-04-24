const path = require('path');
console.log(`\n----- Executing file: ${path.basename(__filename)}-----\n`)

/*

	--- functions and braces nightmare 

*/

const array1 = [3, 1, 9, 567, 23, 1]

// write the function that will make this work

function orderArray(array) {

    //bubblesort!

    let swappedElements

    // keep looping through the array until no adjacent elements have been swapped
    do {
        swappedElements = false

        // loop through the array, comparing adjacent elements
        // - if the first element is bigger than the second one, exchange them, and
        //   set 
        for (let i=0; i < array.length-1; i++) {
            // console.log(`i: ${i}, array[i] ${array[i]}, array[i+1] ${array[i+1]}`)
            if (array[i] > array[i+1]) {
                const bigger = array[i]
                array[i] = array[i+1]
                array[i+1] = bigger
                swappedElements = true
            }
        }
    } while (swappedElements)
    //------------------------------------

    return array
}
//----------------------------



console.log("Should Be: 1, 1, 3, 9, 23, 567:", 
    orderArray(array1))

console.log("Should Be: 1, 5:", 
	orderArray([1, 5]))


console.log("Should Be: 10, 20:", 
    orderArray([20, 10]))
    