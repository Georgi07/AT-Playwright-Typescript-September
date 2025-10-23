//Functions
function displayPersonalData(name: string, age: number): string {
  return `${name} is ${age} years old.`;
}

// console.log(displayPersonalData("Ivan", 20));

const personalData: string = displayPersonalData("Peter", 25);
// console.log(personalData);

function greetingVoid(): void {
  console.log("This function is type void");
}

function devideNums(numOne: number, numTwo: number): number {
  return numOne / numTwo;
}

devideNums(10, 5);
devideNums(50, 5);
devideNums(100, 5);

// arrow function
const sumNums = (a: number, b: number) => a + b;
sumNums(3, 2);

// optional parameters
function greeting(name: string, age?: number) {
  if (age) {
    return `${name} is ${age} years old`;
  }
  return `Hi I am ${name}`;
}
// console.log(greeting("Todor"));
// console.log(greeting("Trifon", 20));

//default parameters
function substractNums(numOne: number = 10, numTwo: number = 5) {
  console.log(numOne - numTwo);
}
// substractNums(50);
// substractNums(50, 30);

// Function with parameter of union type
function printId(id: string | number) {
  console.log(`Id - ${id} is type of ${typeof id}`);
}

printId("#10");
printId(10);
