// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: string = "Welcome!";
// Cannot assign to 'welcomeMssg' because it is a constant.
// welcomeMssg = "Welcome, Peter!"

// string
let message: string = "Hello, Peter!";

// returns string length
let messageLength: number = message.length;

// string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
// console.log(welcomeMessageDetails);

// number and number operations

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let devide: number = numOne / numTwo;

// boolean (true/false)
let areEqual: boolean = numOne === numTwo;
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;

// logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 5;

// Conditions

// ternary operator
let positiveNumComparison: string =
  numOne > 0
    ? `The number ${numOne} is positive`
    : `The number ${numOne} is negative`;

// if/else statement

const numThree: number = 100;

if (numThree <= 10) {
  console.log("The number is less or equal to 10");
} else if (numThree > 110) {
  console.log("The number is greater than 110");
} else if (numThree > 50) {
  console.log("The number is greater than 50");
} else {
  console.log("numOne is not greater than 3");
}

// Union types
let id: string | number;

id = 10;
id = "10";

let result: number | boolean | null;
