//Functions - set of instructions

function greet() {
  console.log("Instruction #1");
  console.log("Instruction #2");
  console.log("Instruction #3");
  console.log("Merry Christmas!");
}

greet();

//Function Hoisting

//1. Function Declaration
//we can hoist this function, will be on top of script
functionDeclaration();

function functionDeclaration() {
  console.log("Hello World! I am a function declaration");
}
//2. Function Expression
//We can't access before initialization, by default we use this one to prevent errors
const functionExpression = function () {
  console.log("Hello universe! I am a function expression");
};
functionExpression();

//Function with parameters
function greet(name) {
  //variable - parameter/ argument - value
  console.log(`Hello ${name}`);
}
greet("Regel");
//Parameter as the placeholder, meanwhile the argument is the actua value we're putting in the function parameter

//Function with a return value
function sum(a, b) {
  a = a + 1;
  return a + b;
  console.log("Hello KC");
}
console.log("Sum:", sum(10, 5));

//Anonymous Function
let greet2 = function () {
  console.log("hello");
};

greet2();

//Higher-order function
function calculate(operation, num1, num2) {
  return operation(num1, num2);
}

//Callback Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

//Using higher-order function
let total = calculate(add, 10, 5);
let difference = calculate(subtract, 23, 13);

console.log("Result of addition:", total);
console.log("Result of subtraction:", difference);
