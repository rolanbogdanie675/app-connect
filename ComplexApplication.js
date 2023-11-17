/**
 * Filename: ComplexApplication.js
 * Description: This complex application code demonstrates an elaborate and sophisticated implementation
 *              using various JavaScript concepts and techniques.
 */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a Car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model} of year ${this.year}.`);
  }
}

// Function to find the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to merge two arrays
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Utility function to generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Array of names
const names = ['John', 'Sarah', 'Michael', 'Emma', 'William'];

// Object representing a complex application
const complexApplication = {
  appName: 'My Complex Application',
  version: '1.0.0',
  developers: ['John', 'Sarah'],
  description: 'A sophisticated application demonstrating various JavaScript techniques.',
  initialize() {
    console.log(`Initializing ${this.appName} (v${this.version})...`);
  },
  execute() {
    console.log(`Running ${this.appName}...`);
    this.developers.forEach(dev => {
      console.log(`Developed by ${dev}`);
    });
    const randomName = names[getRandomNumber(0, names.length)];
    console.log(`Randomly selected name: ${randomName}`);
  }
};

// Testing the complex application
complexApplication.initialize();
complexApplication.execute();

// Create instances of Person and Car
const person1 = new Person('John Doe', 30);
const person2 = new Person('Jane Smith', 25);
const car1 = new Car('Mercedes', 'C-Class', 2020);
const car2 = new Car('BMW', 'X5', 2019);

// Invoke methods of Person and Car instances
person1.greet();
person2.greet();
car1.drive();
car2.drive();

// Calculate factorial of a number
const number = 5;
const factorialResult = factorial(number);
console.log(`Factorial of ${number}: ${factorialResult}`);

// Merge two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = mergeArrays(arr1, arr2);
console.log('Merged Array:', mergedArray);

// Check if a number is prime
const primeNumber = 17;
console.log(`Is ${primeNumber} prime? ${isPrime(primeNumber)}`);