amount=1000
console.log("your bill amount is RS:"+amount) //using +
console.log ("Your bill amout is RS:",amount) //using ,

const pi=3.14
console.log("the pi value is:",pi)
console.log(typeof(pi))


// operators
// 1).Arithmetic Operators:

// + (addition)
// - (subtraction)
// * (multiplication)
// / (division)
// % (modulo, returns the remainder of a division)
let a = 10;
let b = 3;
let sum = a + b;  // 13
let difference = a - b;  // 7
let product = a * b;  // 30
let quotient = a / b;  // 3.333...
let remainder = a % b;  // 1


// 2).Assignment Operators:

// = (assignment)
// +=, -=, *=, /= (compound assignment)

let x = 5;
x += 3;  // equivalent to x = x + 3; (x is now 8)


// 3).Comparison Operators:

// == (equality, with type coercion)
// === (strict equality, without type coercion)
// != (inequality, with type coercion)
// !== (strict inequality, without type coercion)
// >, <, >=, <= (greater than, less than, greater than or equal, less than or equal)

let num1 = 5;
let num2 = '5';

console.log(num1 == num2);  // true (type coercion)
console.log(num1 === num2); // false (strict equality)


// 4).Logical Operators:

// && (logical AND)
// || (logical OR)
// ! (logical NOT)

let condition1 = true;
let condition2 = false;

console.log(condition1 && condition2);  // false (logical AND)
console.log(condition1 || condition2);  // true (logical OR)
console.log(!condition1);  // false (logical NOT)


// 5).Bitwise Operators:

// & (bitwise AND)
// | (bitwise OR)
// ^ (bitwise XOR)
// ~ (bitwise NOT)
// << (left shift)
// >> (right shift)
// >>> (zero-fill right shift)

let a1 = 5;   // Binary: 0101
let b1 = 3;   // Binary: 0011

console.log(a1 & b1);  // 1 (bitwise AND)
console.log(a1 | b1);  // 7 (bitwise OR)
console.log(a1 ^ b1);  // 6 (bitwise XOR)

// user input

// // let name=prompt("enter your name")
// // console.log("hi",name)

// // let age=prompt("enter your age:")
// // console.log("age:",Number(age))

// let age1=(prompt("enter your age:"))
// let age2=Number(prompt("enter your age:"))
// console.log("age:",Number(age1))
// console.log(typeof(age2))

// math functions

// 1).Basic Math Operations:

// Addition: Math.add(x, y) or simply x + y
// Subtraction: Math.subtract(x, y) or simply x - y
// Multiplication: Math.multiply(x, y) or simply x * y
// Division: Math.divide(x, y) or simply x / y
// Modulus (Remainder): Math.remainder(x, y) or simply x % y

let x1 = 10;
let y = 3;
let sum1 = x1 + y;            // Addition
let difference1 = x1 - y;      // Subtraction
let product1 = x1 * y;         // Multiplication
let quotient1 = x1 / y;        // Division
let remainder1 = x1 % y;       // Modulus


// 2).Exponential and Logarithmic Functions:

// Exponential: Math.exp(x) - Returns e^x, where e is Euler's number.
// Natural Logarithm: Math.log(x) - Returns the natural logarithm of x.
// Power: Math.pow(x, y) or x ** y - Returns x to the power of y.
// Square Root: Math.sqrt(x) - Returns the square root of x.

let x2 = 2;
let y2 = 3;
let exponentialResult = Math.exp(x);
let logarithmResult = Math.log(x);
let powerResult = Math.pow(x, y);
let squareRootResult = Math.sqrt(x);

// 3).Trigonometric Functions:

// Sine: Math.sin(x)
// Cosine: Math.cos(x)
// Tangent: Math.tan(x)
// Arcsine: Math.asin(x)
// Arccosine: Math.acos(x)
// Arctangent: Math.atan(x)

let angle = Math.PI / 4;  // 45 degrees in radians
let sineResult = Math.sin(angle);
let cosineResult = Math.cos(angle);
let tangentResult = Math.tan(angle);
let arcsineResult = Math.asin(0.7071);  // inverse sine of 0.7071


// string mathods

// let originalString = "   Hello World!   ";

// let result = originalString
//     .trim()                      // Remove leading and trailing whitespaces
//     .toUpperCase()               // Convert the string to uppercase
//     .toLowerCase()               // Convert the string to lowercase
//     .charAt(2)                   // Get the character at index 2
//     .charCodeAt(0)               // Get the Unicode value of the character at index 0
//     .indexOf("o")                // Get the index of the first occurrence of "o"
//     .lastIndexOf("l")            // Get the index of the last occurrence of "l"
//     .startsWith("Hello")         // Check if the string starts with "Hello"
//     .endsWith("World!")          // Check if the string ends with "World!"
//     .includes("llo")             // Check if the string includes "llo"
//     .substring(0, 5)             // Get the substring from index 0 to 4
//     .slice(6, 11)                // Get the substring from index 6 to 10
//     .concat(", Welcome")         // Concatenate ", Welcome" to the string
//     .replace("WORLD", "Universe")// Replace "WORLD" with "Universe"
//     .split(" ")                  // Split the string into an array based on whitespace
//     .join("-");                  // Join the array elements into a string separated by "-"

// console.log(result);

// console.log(dir(String));




// template literals  (`&{}`) backtics
person_1="thamarai"
person_2="selvan"
console.log(person_1+ " is " +person_2);  //normal one
console.log(`${person_1} is ${person_2} => this is template literals`);

// //array
// length:

// Property that returns the number of elements in the array.

let fruits = ['apple', 'orange', 'banana'];
console.log(fruits.length);  // Output: 3

// concat(array2, array3, ...):

// Joins two or more arrays.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = arr1.concat(arr2);
console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]

// push(element1, element2, ...):

// Adds one or more elements to the end of the array and returns the new length.

let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);  // Output: [1, 2, 3, 4, 5]


// pop():

// Removes the last element from the array and returns that element.

let colors = ['red', 'green', 'blue'];
let removedColor = colors.pop();
console.log(removedColor);  // Output: 'blue'

// shift():

// Removes the first element from the array and returns that element.

let fruits2 = ['apple', 'orange', 'banana'];
let removedFruit = fruits2.shift();
console.log(removedFruit);  // Output: 'apple'

// unshift(element1, element2, ...):

// Adds one or more elements to the beginning of the array and returns the new length.

let numbers2 = [2, 3, 4];
numbers2.unshift(0, 1);
console.log(numbers2);  // Output: [0, 1, 2, 3, 4]

// indexOf(element, startIndex):

// Returns the first index at which a given element can be found in the array, or -1 if it is not present.

let numbers3 = [10, 20, 30, 40, 50];
console.log(numbers3.indexOf(30));  // Output: 2

// slice(startIndex, endIndex):

// Extracts a section of an array and returns it as a new array.

let fruits3 = ['apple', 'orange', 'banana', 'mango'];
let selectedFruits = fruits3.slice(1, 3);
console.log(selectedFruits);  // Output: ['orange', 'banana']

// splice(startIndex, deleteCount, item1, item2, ...):

// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(2, 1, 10, 11);
console.log(`${numbers4}`);  // Output: [1, 2, 10, 11, 4, 5]
console.log(numbers4);

// forEach(callbackFunction):

// Calls a provided function once for each element in the array, in order.
 
let numbers6 = [1, 2, 3];
numbers6.forEach(function (element) {
    console.log(element);
});
// Output:
// 1
// 2
// 3
