
//Introduction to Arrays
// let superheros = ["Superman", "Batman", "Joker", "Spiderman", "Wonder Woman"];

// console.log('Hero 1 is', superheros[0]);
// console.log('Hero 5 is', superheros[4]);

// superheros[2] = "Doctor Strange";

//// Push Method (Adding a new value to array)
//superheros.p;ush("Deadpool")
// console.log(superheros);

//// Pop method(Removing last value in the array)
// superheros.pop();
// console.log(superheros);

// Array Iteration
// for (let i = 0; i <= 4; i++) {
//   console.log("Hero", i + 1, "is", superheros[i]);
// }

// forEach method
// superheros.forEach(function (hero) {
//   console.log("Hero is", hero);
// });


let superheros = ["Superman", "Batman", "Joker", "Spiderman", "Wonder Woman"];

//Array Methods
console.log('Array length is"', superheros.length);
console.log("Value of Wonder Woman is", superheros.indexOf('Wonder Woman')); 
console.log("Value of Scarlet Witch is", superheros.indexOf('Scarlet Witch')); //-1

console.log("Joined Array:", superheros.join('-'));

let slicedArray = superheros.slice(0, 1)
console.log(slicedArray);

