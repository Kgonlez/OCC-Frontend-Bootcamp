const person = {
  fistName: "Gab",
  lastName: "Doe",
  nickname: "KD",
  age: 28,
  height: "5'9",
  hobbies: ["reading", "gaming", "painting"],

  //method
  greet: function () {
    console.log(`Hello, my name is ${person.fistName} and I am ${person.age}.`);
  },
};

//Dot notation
console.log(person.fistName);
console.log(person.hobbies);

person.greet();

//Adding new properties
person.nationality = "American";
console.log(person.nationality);

//Adding new methods
person.talkHobbies = function () {
  console.log(`I like ${person.hobbies[1]}!`);
};

person.talkHobbies();

//OOP = Object-oriented Programming

//Nested Objects
const movie = {
  title: "Pulp Fiction",
  genre: "Action",
  cast: ["John Travolta", "Samuel L. Jackson"],
};

person.favoriteMovie = movie;
console.log(person.favoriteMovie.title);

//Destructuring objects
// const lastName = person.lastName;
// const nickname = person.nickname;

const { lastName, nickname, age } = person;
console.log(lastName, nickname, age);

const {height} = person;
console.log(height);