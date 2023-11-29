import { add, sub, mult, div } from "./lib/math.js";
import fs from "fs";

const args = process.argv;
const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);

const arithmeticOperations = {
  add: "addition",
  sub: "subtraction",
  mul: "multiplication",
  div: "division",
};

let result = 0;

if (operation === arithmeticOperations.add) {
  const sumOfNumber = add(num1, num2);
  result += sumOfNumber;
} else if (operation === arithmeticOperations.sub) {
  const subtractionOfNumber = sub(num1, num2);
  result += subtractionOfNumber;
} else if (operation === arithmeticOperations.mul) {
  const multiplicationOfNumbers = mult(num1, num2);
  result += multiplicationOfNumbers;
} else if (operation === arithmeticOperations.div) {
  const divisionOfNumber = div(num1, num2);
  result += divisionOfNumber;
} else {
  console.log("Enter Valid Operation");
  process.exit(0);
}

if (fs.existsSync("MathsOperationResult.csv")) {
  fs.appendFile(
    "MathsOperationResult.csv",
    `${operation},${num1},${num2},${result}\n`,
    (err) => {
      if (err) console.log(err);
      console.log(
        "Operation has been successfully added to the MathsOperationResult.csv file "
      );
    }
  );
} else {
  fs.appendFile(
    "MathsOperationResult.csv",
    `Operations,Num1,Num2,Result\n${operation},${num1},${num2},${sumOfNumber}\n`,
    (err) => {
      if (err) console.log(err);
      console.log(
        "Operation has been successfully added to the MathsOperationResult.csv file "
      );
    }
  );
}
