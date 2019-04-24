"use strict";

/*

	--- functions and braces nightmare 

*/
// console.log("Hello from exercises");
// const array1 = [3, 1, 9, 567, 23, 1];
// write the function that will make this work
function orderArray(array) {
  console.log('inside orderArray()'); //bubblesort!

  var swappedElements; // keep looping through the array until no adjacent elements have been swapped

  do {
    swappedElements = false; // loop through the array, comparing adjacent elements
    // - if the first element is bigger than the second one, exchange them, and
    //   set 

    for (var i = 0; i < array.length - 1; i++) {
      console.log("i: ".concat(i, ", array[i] ").concat(array[i], ", array[i+1] ").concat(array[i + 1]));

      if (array[i] > array[i + 1]) {
        var bigger = array[i];
        array[i] = array[i + 1];
        array[i + 1] = bigger;
        swappedElements = true;
      }
    }
  } while (swappedElements); //------------------------------------


  console.log(array);
  return array;
} //----------------------------
// console.log("Should Be: 1, 3:", 
//     orderArray(array1));
// console.log("Should Be: 1, 5:", 
// 	orderArray([1, 5]));
// console.log("Should Be: 10, 20:", 
//     orderArray([20, 10]));