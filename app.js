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

for (const veggies of favVeggies) {
  console.log(veggies);
}

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

for (const visitor of visitors) {
  checkAge(visitor.name, visitor.age);
}

const length = getLength('Hello World');

getLength('Hello World') % 2 == 0
  ? console.log('The world is nice and even!')
  : console.log('The world is an odd place!');

// Function Declarations
function sayHello() {
  alert('Hello World!');
}

function checkAge(name, age) {
  if (age < 21) {
    alert('Sorry ' + name + ", you aren't old enough to view this page!");
  }
}

function getLength(str) {
  return str.length;
}
