//Conditional statements
let age = 18;

if (age <= 18) {
  console.log("I am statement number 5");
} else {
  console.log("I am statement number 5");
}

//if
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//if, if-else,else
let temperature = 25;

if (temperature < 0) {
  console.log("It's freezing");
} else if (temperature > 0 && temperature < 20) {
  console.log("It is cool outside");
} else {
  console.log("It is a warm day!");
}

//Conditional :Switch Statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
  case "Friday":
    console.log("End of the week");
  default:
    console.log("It's a regular day");
    break;
}
