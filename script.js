//very easy challenge
var num1 = 20;
var num2 = 15;

console.log(`the difference between ${num1} and ${num2} is ${num1 - num2}`);

//easy challenge
var name1 = "osiel";
var name2 = "Srikanth";

console.log(
  `the name ${name1} is shorter then ${name2} by ${
    name2.length - name1.length
  } characters.`
);
// medium challenge

let userTxt = prompt("Please insert a word");

if (userTxt === userTxt.toUpperCase()) {
  console.log(`why are you shouting?`);
} else if (userTxt === userTxt.toLowerCase()) {
  console.log(`why are you whispering?`);
} else {
  console.log(`what are you saying?`);
}
////hard
//add
function addition(x, y) {
  console.log(x + y);
}
addition(1, 2);
//subtract
function subtract(x, y) {
  console.log(x - y);
}
subtract(3, 4);
//multi

function multiplication(x, y) {
  console.log(x * y);
}
multiplication(5, 6);
///division
function division(x, y) {
  console.log(x / y);
}
division(4, 2);

///// very hard
/// get person to insert a number
let firstNum = parseInt(prompt(" insert a number please"));
console.log(firstNum, typeof firstNum);
/// options to choose examples
let operator = prompt(" choose operation (+ , -, *, /) ");

//// choose second
let secondNum = parseInt(prompt("insert second number"));
//let result;
if (operator === `+`) {
  addition(firstNum, secondNum);
  //result = firstNum + secondNum;
} else if (operator === `-`) {
  subtract(firstNum, secondNum);
  //result = firstNum - secondNum;
} else if (operator === `*`) {
  multiplication(firstNum, secondNum);
  //result = firstNum * secondNum;
} else {
  division(firstNum, secondNum);
  //result = firstNum / secondNum;
}
///result

console.log(`${firstNum}  ${operator}  ${secondNum} = ${result}`);
