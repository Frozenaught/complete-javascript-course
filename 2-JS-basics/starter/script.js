// console.log("Hello Again");
// console.log('hi');
/*
var firstName = "John";
console.log(firstName);

var lastName = "smith";
var age = "28";
var fullAge = true;
var job;
console.log(firstName + " " + lastName + " is " + age);
console.log(job);

job = "Teacher";

console.log(job);
*/

/*****************************************
 * Variable Mutation and type coercion
 */

var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

//variable mutation
age = "twenty five";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

let lastName = prompt("What is hos last name? ");
alert("Hello " + firstName + " " + lastName);
