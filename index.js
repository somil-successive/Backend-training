import { add, sub, mult, div } from "./lib/math.js";
import fs from "fs";

const args = process.argv;
const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);

const sumOfNumber = add(num1, num2);
const subtractionOfNumber = sub(num1, num2);
const multiplicationOfNumbers = mult(num1, num2);
const divisionOfNumber = div(num1, num2);
let result = 0;
if (operation === "Addition") {
  result += sumOfNumber;
} else if (operation === "Subtraction") {
  result += subtractionOfNumber;
} else if (operation === "Multiply") {
  result += multiplicationOfNumbers;
} else {
  result += divisionOfNumber;
}

if (fs.existsSync("MathsOperationResult.csv")) {
  fs.appendFile(
    "MathsOperationResult.csv",
    `${operation},${num1},${num2},${result}\n`,
    (err) => {
      console.log(err);
    }
  );
} else {
  fs.appendFile(
    "MathsOperationResult.csv",
    `Operations,Num1,Num2,Result\n${operation},${num1},${num2},${sumOfNumber}\n`,
    (err) => {
      console.log(err);
    }
  );
}
