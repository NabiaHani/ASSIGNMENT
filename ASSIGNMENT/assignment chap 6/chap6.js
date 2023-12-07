// PRACTICE EXERCISE 6.1

// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}
let num1 = 5;
let num2 = 10;

let result1 = addNumbers(num1, num2);
console.log(`Result of adding ${num1} and ${num2}: ${result1}`);


let num3 = 15;
let num4 = 20;
let result2 = addNumbers(num3, num4);
console.log(`Result of adding ${num3} and ${num4}: ${result2}`);








// PRACTICE EXERCISE 6.2


const descriptiveWords = ['awesome', 'amazing', 'fantastic', 'wonderful', 'incredible'];


function describeName() {
  
  let userName = prompt('Please enter a name:');

  if (userName) {
   
    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    let randomWord = descriptiveWords[randomIndex];

  
    console.log(`The name '${userName}' is ${randomWord}!`);
  } else {
    console.log('No name entered. Please try again.');
  }
}

describeName();









// PRACTICE EXERCISE 6.3

let num5 = 10;
let num6 = 5;


let operator = '+';


function calculate(num5, num6, operation = 'add') {
  if (operation === 'add' || operation === '+') {
    return num5 + num6;
  } else if (operation === 'subtract' || operation === '-') {
    return num5 - num6;
  } else {
    return num5 + num6;
  }
}

console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);

operator = '-';
console.log(`Result of ${num1} ${operator} ${num2}: ${calculate(num1, num2, operator)}`);






// PRACTICE EXERCISE 6.4


let resultsArray = [];
for (let i = 1; i <= 10; i++) {
  let value1 = i * 5;
  let value2 = i * i; 
  
  function addValues(a, b) {
    return a + b;
  }

  let result = addValues(value1, value2);

  resultsArray.push(result);
}
console.log(resultsArray);







// PRACTICE EXERCISE 6.5

let value = '1000';


(function() {
  let value = 'Local value from first IIFE';
  console.log('Local value from first IIFE:', value); 
})();


let result = (function() {
  let value = 'Local value from second IIFE';
  return value;
})();


console.log('Result from second IIFE:', result); 


let anonymousFunction = function(newValue) {
  console.log(`Value from anonymous function: ${newValue}`); 
};


anonymousFunction('Value passed to anonymous function');






// PRACTICE EXERCISE 6.6

// Function to calculate factorial using recursion
function calculateFactorial(num) {
    if (num === 0) {
      return 1;
    } else {
      console.log(`Current value of num: ${num}`);
      return num * calculateFactorial(num - 1);
    }
  }
  
  let number = 5;
  console.log(`Factorial of ${number} is: ${calculateFactorial(number)}`);





//   practice exercise 6.7


let start = 10;
function countdown(count) {

  console.log(count);

  if (count < 1) {
    return;
  }

  if (count >= 1) {
    return countdown(count - 1);
  }
}
countdown(start);




// PTACTICE EXERCISE 6.8


let name = function(arg) {
    console.log(arg);
  };
  
  name('Function expression: Hello, World!');
  function displayName(arg) {
    console.log(arg);
  }
  displayName('Function declaration: Hello, World!');
  
  





//   CHAPTER PROJECT 
// RECURSIVE FUCTION

function countToTen(num) {
    console.log(num); 
    if (num > 10) {
      return;
    }
    return countToTen(num + 1);
  }

  countToTen(7);
  countToTen(12);
  countToTen(4);



//   SET TIMEOUT ORDER

// Arrow functions to output values to console
const outputOne = () => console.log('One');
const outputTwo = () => console.log('Two');
const outputThree = () => {
  console.log('Three');
  outputOne();
  outputTwo();
};
const outputFour = () => console.log('Four');
setTimeout(() => {
  outputOne();
}, 0);

setTimeout(() => {
  outputThree();
}, 0);

setTimeout(() => {
  outputFour();
}, 0);

  