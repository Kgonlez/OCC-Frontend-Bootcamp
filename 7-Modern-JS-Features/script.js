//Arrow Function
const greet = () => {
  console.log("Merry Christmas!");
};

greet();

//Enhanced Object Literals
const person = {
  name: "Ron",
  age: 21,
  greeting() {
    console.log(`My name is ${this.name}.`);
  },
};
//this refers to the object
person.greeting();

//Spread and Rest operators
//Spread
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//Rest
function myFunction(firstArg, ...restOfArgs) {
  console.log(firstArg);
  console.log(restOfArgs);
}

myFunction("one", "two", "three", "four");

//Common JS BUilt-in Methods
//Arrays
//Filter

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers2.filter((number) => number % 2 == 0);
console.log(even);

const odd = numbers2.filter((num) => num % 2 != 0);
console.log(odd);

//String
//Split
const message = "Hello, Universe!, Hi";
const words = message.split(", ");
console.log(words);

//Includes
const sentence = "The quick brown fox jumps over the lazy dog";
const containsWord = sentence.includes("fox");
console.log(containsWord);

//Length
const sentenceLength = sentence.length;
console.log(sentenceLength);

//Objects
const cat = {
  name: "Chicha",
  age: 3,
  color: ["Black", "White"],
};

//Keys
console.log(Object.keys(cat));
//Values
console.log(Object.values(cat));
//Entries - Key Value pair in array
console.log(Object.entries(cat));

//Math
//Max and Min
const maxNum = Math.max(10, 5, 20, 30);
console.log(maxNum);

const minNum = Math.min(10, 5, 20, 30);
console.log(minNum);

//random _ between 0 and 1 unless we multiply
const randomValue = Math.random() * 10;
console.log(randomValue);

//round _ up
console.log(Math.round(randomValue));

//floor _ down
console.log(Math.floor(randomValue));

// ceil _ up
console.log(Math.ceil(randomValue));

//Nested Math Methods
const randomNum = Math.floor(Math.random() * 100);
console.log("random number between 1 and 100:", randomNum);


//Other methods 
//Date 
const currentDate = new Date();
console.log(currentDate);

const Christmas = new Date(2023, 11, 25)
console.log(Christmas);

//toFixed
const price = 100.12345.toFixed(2)
console.log(price);

//toString
const num = 38;
const paresedString = num .toString();
console.log(paresedString +1);