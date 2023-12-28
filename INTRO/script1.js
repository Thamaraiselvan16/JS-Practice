// print  radom letter from your name

let myName="thamaraiselvan"
// let myName=prompt("enter your name: ")
let randomIndex=Math.floor(Math.random()*myName.length);
let randomLetter=myName.charAt(randomIndex)
console.log("random letter is :",randomLetter);

// // print this
// "You have 5 items in your cart Your bil amount is $95"

// use variables itemCount and total to print the numbera

let itemCount=5;
let total=95;
let message=`You havee ${itemCount} in your cart Your bil mount is $${total}`
console.log(message)

// arr=[5,8,10,7,9,11]
// replace 7,9,11 with 17,19,111
// insert 100 in the beginning
// insert 200 in lase but one position
// add 1000 at the end
// insert 0 in the middle. USe ar .length to find middle

let arr=[5,8,10,7,9,11]

arr.splice(3,3,17,19,111);
arr.unshift(100);
arr.splice(arr.length-1,0,200);
arr.push(1000);
let middleIndex=Math.floor(arr.length/2);
arr.splice(middleIndex,0,0);
console.log(arr)
