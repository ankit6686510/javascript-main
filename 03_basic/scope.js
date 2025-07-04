//scope in js
//scope is used to declare variable and accessed.
//GLOBAL SCOPE-->variable declared outside of any function or block
var globalVariable = " i am global";
function exampleFunction() {
  // console.log(globalVariable)//accesing the global variable inside function
}
exampleFunction();
// console.log(globalVariable);//accesing global outside the function

//LOCAL SCOPE-->variable declared inside a function or blocK have local scope
//only accese within function or block jaha pr declared hai

function exampleFunction1() {
  var localVariable = " i am local"; //declaring inside a function
  // console.log(localVariable)//accesing local varaible
}
exampleFunction1();
// console.log(localVariable);//error because localVariable is not accessible here

//Block Scope (ES6 and later):
//Introduced with ES6 (ECMAScript 2015), let and const declarations have block scope.

// Block scope means the variable is only accessible within the block (a pair of curly braces {}) where it is declared.

if (true) {
  let blockScopeVariable = " i am block scoped";
  // console.log(blockScopeVariable);
}
// console.log(blockScopedVariable); // This would result in an error

// Function Scope (var declarations):

// Before ES6, variables declared with var had function scope. They were only accessible within the function where they were declared.

function exampleFunction2() {
  var functionScopeVarible = " i am function scoped";
  // console.log(functionScopeVarible);
}
exampleFunction2();
// console.log(functionScopeVarible)//This would result in an error

// js video reference
let a = 200;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log("INNER:",a)//10 will be printed
}
// console.log(a);//ye kuch nhi print karega error dega
// console.log(b);//same ye bhi
// console.log(c);//lekin ye 30 print kr dega isliye var use nhi krte

function one() {
  const username = "ankit";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);
  two();
}
// one()
if (true) {
  const username = "ankit";
  if (username === "ankit") {
    const website = " youtube";
    // console.log(username + website)
  }
  // console.log(website)//error
}
// console.log(username)

///V.V INTRESTING
function addone(num) {
  return num + 1;
}
addone(5);
console.log(addone());

const addtwo = function (num) {
  return num + 2;
};
addtwo(5);
console.log(addtwo());

function calculatesum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
const result = calculatesum(5);
console.log("sum of number from 1 to  5", result);
