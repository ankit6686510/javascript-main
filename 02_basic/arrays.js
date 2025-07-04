//Array
const myarr = [0, 1, 2, 4, 5, 3, 6];
const myheroes = ["shaktiman", "naagraj", "hero"];
// console.log(myheroes)

const myarr2 = new Array(10, 20, 30);
// console.log(myarr2)

//Array method

// myarr.push(53)//at last it will add 53
// console.log(myarr)
// myarr.pop(9);//index 9 will be pop
// console.log(myarr);

// myarr.unshift(9)//add 9 to the begining
// console.log(myarr);
// myarr.shift(5)
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3))

// const newarr = myarr.join()
// console.log(myarr);
// console.log(newarr);
// console.log(typeof(newarr))

//imp.SLICE AND SPLICE

// console.log("A",myarr);
// const myn1 =myarr.slice(1,3)//between 1 and 3 including 1 excluding 3
// console.log(myn1);
// console.log("B",myarr);

const myn2 = myarr.splice(1, 3); //give all including 1&3
console.log(myn2);
console.log("c", myarr); //remove the element from 1 to 3 and at begining it will add c
console.log(myn2);

/*
In JavaScript, slice and splice are both array methods, but they serve different purposes.

slice() Method:

The slice method is used to extract a portion of an array and returns a new array without modifying the original array.
It takes two parameters: the starting index (inclusive) and the ending index (exclusive).
The original array remains unchanged.

const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4); // extracts elements from index 1 to 3
console.log(slicedArray); // Output: [2, 3, 4]
console.log(originalArray); // Original array is unchanged: [1, 2, 3, 4, 5]


*/
/*
splice() Method:

The splice method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
It takes three parameters: the starting index, the number of elements to remove, and optional elements to add.
Unlike slice, splice modifies the original array.

const originalArray = [1, 2, 3, 4, 5];
const removedElements = originalArray.splice(1, 2); // removes 2 elements starting from index 1
console.log(removedElements); // Output: [2, 3]
console.log(originalArray); // Original array is modified: [1, 4, 5]

// Adding elements using splice
originalArray.splice(2, 0, 6, 7); // inserts 6 and 7 at index 2 without removing any elements
console.log(originalArray); // Output: [1, 4, 6, 7, 5]

*/
// In summary, slice is used for extracting a portion of an array without modifying the original array, while splice is used for modifying the contents of an array by adding, removing, or replacing elements.
