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
console.log(checkTypeOf);
