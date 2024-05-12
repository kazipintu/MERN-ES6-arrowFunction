/*  ~ ARROW FUNCTION ~  */

{
  // Option-4: EC6 way to write a function, without keyword 'function' with adding arrow after name.
  const add4 = (num1, num2) => {
    return num1 + num2
  } // entire function statement is assigned into a variable here. without any name of function.
  const result4 = add4(21, 12)
  console.log(add4); // console proves, it is a valid function
  console.log(result4);

}


{
  // Option-3: Older way to write a function, without any name. It's an anonymous function.
  const add3 = function (num1, num2) {
    return num1 + num2
  } // entire function statement is assigned into a variable here. without any name of function.
  const result3 = add3(13, 18)
  console.log(add3); // console proves, it is a valid function
  console.log(result3);

}


{
  // Option-2: Older way to write a function, entire function is assigned into a variable.
  const add2 = function add(num1, num2) {
    return num1 + num2
  } // entire function statement is assigned into a variable here.
  const result2 = add2(12, 15)
  console.log(add2); // console proves, it is a valid function
  console.log(result2);

}


{
  // Option-1: Older way to write a function with simple return.
  function add(num1, num2) {
    return num1 + num2;
  }
  const result1 = add(15, 7);
  console.log(result1);

}


// Arrow Function //
const newFunction = (number1, number2) => { number1 + number2 };
// OR,
const arrowFunction = (number3, number4) => number3 + number4;
const sum = arrowFunction(24, 58);
console.log(sum);

const arrowMultiply = (numb1, numb2, numb3) => numb1 * numb2 * numb3;
const output = arrowMultiply(12, 3, 2);
console.log(output);

const tenTimes = (number) => number * 10;
const tenResult = tenTimes(5);
console.log(tenResult);

const fiveTimes = numm => numm * 5;
const fiveResult = fiveTimes(25);
console.log(fiveResult);

const doMath = (n1, n2, n3, n4) => (((n1 * n2) + n4) / n3);
const resultMath = doMath(12, 4, 3, 2);
console.log(resultMath);

const doMath2 = (n5, n6) => {
  const addMath = n5 + n6;
  const minusMath = n5 - n6;
  const multiplyMath = addMath * minusMath;
  return multiplyMath
}
const totalMath = doMath2(15, 13)
console.log(totalMath);
