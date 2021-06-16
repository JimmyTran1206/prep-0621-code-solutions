function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hourNum = 2;
var minutes = convertHoursToMinutes(hourNum);
console.log(`there are ${minutes} minutes in ${hourNum} hours`);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
console.log(getGreeting('Bunny'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log('addAndMultiplyBy5(10, 5): ', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log('multiplyAndDivideBy5(10, 35): ', multiplyAndDivideBy5(10, 35));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log('subtractTwoNumbers(22, 7): ', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
let radius = 5;
console.log(`the circumference of a circle with radius ${radius} is ${getCircleCircumference(radius)}`);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(`Your full name is ${getFullName('Jimmy', 'Tran')}`);

function cube(number) {
  return Math.pow(number, 3);
}
let number = 8;
console.log(`The cubic value of ${number} is ${cube(number)}`);
