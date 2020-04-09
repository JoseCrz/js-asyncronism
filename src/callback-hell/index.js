
// * First Example
const calculation = (num1, num2, callback) => callback(num1, num2)

const sum = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const multi = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2
const exp = (num1, num2) => num1 ** num2

console.log(calculation(6, 9, sum))
console.log(calculation(6, 9, sub))
console.log(calculation(6, 9, multi))
console.log(calculation(6, 9, div))
console.log(calculation(6, 9, exp))
