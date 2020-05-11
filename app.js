// Variable "name" is assigned the value of "Derrick"
let name = 'Derrick'; 

const numStates = 50;
let sum = 5 + 4;

sayHello();

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let favVeggies = ['carrots', 'cabbage', 'spinach', 'green peppers'];

// v1: Log array using For of loop
for (const veggies of favVeggies) {
  console.log(veggies);
}

// v2: Log array using For loop
// for (let i = 0; i < favVeggies.length; i++) {
//   const result = favVeggies[i];
//   console.log(result);
// }


const pet = {
  name: 'GigaBite',
  breed: 'Chia',
};
console.log(pet);

const visitors = [
  {
    name: 'Luke',
    age: 21,
  },
  {
    name: 'Paul',
    age: 39,
  },
  {
    name: 'Kim',
    age: 18,
  },
  {
    name: 'Sally',
    age: 14,
  },
  {
    name: 'Sam',
    age: 28,
  },
];

// v1: Use the checkAge function to increment through array using the For of loop
for (const visitor of visitors) {
  checkAge(visitor.name, visitor.age)
}

// v2: Use the checkAge function to increment through array using the For loop
// for (let i = 0; i < visitors.length; i++) {
//   checkAge(visitors[i].name, visitors[i].age);
// }

/* v3: For in loop - Purely for testing purposes

for (const visitor in visitors) {
    if (visitors.hasOwnProperty(visitor)) {
        const name = visitors[visitor].name;
        console.log(name);
    }
}

*/

const length = getLength('Hello World');

// v1: Check for even or odd using ternary operator
getLength('Hello World') % 2 == 0
  ? console.log('The world is nice and even!')
  : console.log('The world is an odd place!');

// v2: Check for even or odd using If statement
// if (length % 2 == 0) {
//   console.log('The world is nice and even!');
// } else {
//   console.log('The world is an odd place!');
// }


// Function Declarations
function sayHello() {
  alert('Hello World!');
}

function checkAge(name, age) {
  if (age < 21) {
    alert('Sorry ' + name + ", you aren't old enough to view this page!");
    // Using template literal
    // alert(`Sorry ${name}, you aren't old enough to view this page!`); 
  }
}

function getLength(str) {
  return str.length;
}