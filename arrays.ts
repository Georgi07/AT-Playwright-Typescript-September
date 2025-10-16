// arrays declaration
let numsArray: number[] = [1, 2, 3, 4];
let stringsArray: string[] = ["Pesho", "Gosho", "Tosho", "Ivan"];
let combinedArray: (string | number)[] = [1, "Pesho", "Ivan", 2];

// access element by index
stringsArray[0]; // Pesho
stringsArray[1]; // Gosho
combinedArray[2]; // Ivan

// acces array length
numsArray.length;

// method map
let multiplyNums = numsArray.map((num: number) => num * 2);
let mapNames = stringsArray.map((currName: string) => `Hello ${currName}`);
let checkTypeOf = combinedArray.map((element: number | string) => {
  if (typeof element === "number") {
    return element + 5;
  } else {
    return `Welcome ${element}`;
  }
});
// console.log(checkTypeOf);

// method filter
let positiveNums: number[] = [2, 3, 4, 5, 6];
let filteredArr: number[] = positiveNums.filter(
  (num: number) => num > 3 && num < 6
);

// method sort
let sortNums: number[] = [100, 2, 30, 5, 40, 6];
let sortedResult = sortNums.sort((a: number, b: number) => a - b);

// method push
sortedResult.push(200);

// method pop
sortedResult.pop();

//method shift
sortedResult.shift();

//method unshift
sortedResult.unshift(1);
