// PRACTICE EXERCISE 5.1

// 1. Set max value for the number guessing game
const maxValue = 5;
const solution = Math.floor(Math.random() * maxValue) + 1;
// Uncomment the line below for development to see the generated solution
// console.log("The solution is:", solution);

let isCorrect = false;

while (!isCorrect) {
  let userGuessString = prompt(`Enter a number between 1 and ${maxValue}:`);

  let userGuess = parseInt(userGuessString);

  if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= maxValue) {

    if (userGuess === solution) {
      isCorrect = true;
      alert('Congratulations! You guessed the correct number.');
    } else if (userGuess > solution) {
      alert('Too high. Try again.');
    } else {
      alert('Too low. Try again.');
    }
  } else {
    alert(`Please enter a valid number between 1 and ${maxValue}.`);
  }
}





// PRACTICE EXERCISE 5.2

let counter = 0;

const step = 5;

do {
  console.log(`Counter: ${counter}`);
  counter += step;
} while (counter < 100);


if (counter >= 100) {
  console.log(`Counter reached ${counter} or more than 100.`);
}








// PRACTICE EXERCISE 5.3

let myWork = [];
for (let i = 1; i <= 10; i++) {
  let status = i % 2 === 0 ? false : true;
  let lesson = {
    name: `Lesson ${i}`,
    status: status
  };
  myWork.push(lesson);
}
console.log(myWork);








// PRACTICE EXERCISE 5.4

let myTable = [];

const numRows = 5;
const numColumns = 4;

let counter1 = 0;

for (let i = 0; i < numRows; i++) {
  let tempTable = [];

  for (let j = 0; j < numColumns; j++) {
    counter1++;

    tempTable.push(counter);
  }

  myTable.push(tempTable);
}

console.table(myTable);








// PRACTICE EXERCISE 5.5

let grid = [];

const numCells = 64;

let counter2 = 0;
let rowArray = [];
for (let i = 0; i <= numCells; i++) {

  counter2++;

  rowArray.push(counter2);

  if (counter2 % 8 === 0) {

    if (typeof rowArray !== 'undefined') {
      grid.push(rowArray);
    }
    
    rowArray = [];
  }
  
  if (counter2 === 8) {
    grid.push(rowArray);
  }
}

console.log(grid);








// PRACTICE EXERCISE 5.6

let myArray = [];
for (let i = 0; i < 10; i++) {
  myArray.push(i);
}

console.log("Array contents:", myArray);

console.log("Outputting array contents using for loop:");
for (let j = 0; j < myArray.length; j++) {
  console.log(myArray[j]);
}

console.log("Outputting array contents using for...of loop:");
for (const value of myArray) {
  console.log(value);
}








// PRACTICE EXERCISE 5.7

let myObject = {
  item1: 'TESLA',
  item2: 'BMW',
  item3: 'BUGATTI'
};

console.log('Looping over object:');
for (let key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}

let myArray1 = ['TESLA', 'BMW', 'BUGATTI'];
console.log('\nLooping over array:');
for (let i = 0; i < myArray1.length; i++) {
  console.log(myArray1[i]);
}







// PRACTICE EXERCISE 5.8

// USING CONTINUE


let outputString = '';

let numberToSkip = 7;


for (let i = 1; i <= 10; i++) {
  if (i === numberToSkip) {

    continue;
  }
  outputString += i;
}

console.log('Output using continue:', outputString);


// USING BREAK

let newOutputString = '';

let stopNumber = 7;

for (let j = 1; j <= 10; j++) {
  if (j === stopNumber) {
    break;
  }
  newOutputString += j;
}

console.log('Output using break:', newOutputString);







// CHAPTER PROJECT

let multiplicationTable = [];

const valuesToMultiply = 10;

for (let i = 1; i <= valuesToMultiply; i++) {
  let tempArray = [];

  for (let j = 1; j <= valuesToMultiply; j++) {
    tempArray.push(i * j);
  }
  multiplicationTable.push(tempArray);
}
console.log('Multiplication Table:', multiplicationTable);
