// --- Exercise 6 ---
// Write a program that reads the natural number "n" and determines the
// sum s = 1**1 + 2**2 + ... + n**n
// Restrictions and clarifications: 0 < n <= 15

function returnSumOfExponentiatedNumbers(num) {
  if (num <= 0 || num > 15) {
    throw Error('Please, eneter a number between 1 and 15!');
  }

  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = sum + i**i;
  }

  return sum;
};

console.log(returnSumOfExponentiatedNumbers(4));


// --- Exercise 7 ---
// Given N, a nonzero natural number, calculate the sum S = 1**2 + 2**2 + 3**2 + ... + n**2
// Restrictions and clarifications: 1 <= N <= 30

function returnSumOfSquareNumbers(num) {
  if (num < 1 || num > 30) {
    throw Error('Please, enter a number between 1 and 30');
  }

  let sumOfSquareNumbers = 0;

  for (let i = 1; i <= num; i++) {
    sumOfSquareNumbers = sumOfSquareNumbers + i**2;
  }

  return sumOfSquareNumbers;
};

console.log(returnSumOfSquareNumbers(4));


// --- Exercise 8 ---
// Given n natural numbers. For each number x, calculate:
//    1+(1+2)+(1+2+3)+(1+2+3+4)+...+(1+2+3+...x).
// Restrictions and clarifications: 1 <= n <= 200

function cumulativeNestedSum(num) {
  if(num < 1 || num > 200) {
    throw Error('Please, enter a number between 1 and 200!');
  };
  
  let sum = 0;
  let cumulativeX = 0;

  for (let i = 1; i <= num; i++) {
    if (i > 1) {
      sum = sum + cumulativeX + i;
      cumulativeX = cumulativeX + i;
    } else {
      sum = sum + i;
      cumulativeX = cumulativeX + i;
    }
  };

  return sum;
};

console.log(cumulativeNestedSum(5));


// --- Exercise 9 ---
// Given n integers. Calculate the largest of the n given numbers.
// Restrictions and clarifications: 
//     -> 1 <= n <= 1000
//     -> the given n numbers will have at most 9 digits

function returnMaxNumber(...numbers) {
  if (numbers.length > 9) {
    throw Error('You can input max 9 numbers.');
  }
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 1 || numbers[i] > 1000) {
      throw Error('Each number must be between 1 and 1000');
    }
  };
  
  return Math.max(...numbers);
};

const numbersArray = [2, 6, 90, 100, 23, 167, 9, 5, 7];
console.log(returnMaxNumber(...numbersArray));


// --- Exercise 10 ---
// Given n integers. Calculate the smallest of the n given numbers.
// Restrictions and clarifications: 
//     -> 1 <= n <= 1000
//     -> the given n numbers will have at most 9 digits

function returnMinNumber(...numbers) {
  if (numbers.length > 9) {
    throw Error('You can input max 9 numbers.');
  }

  for (let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] < 1 || numbers[i] > 1000) {
      throw Error('Each number must be between 1 and 1000');
    }
  };

  return Math.min(...numbers);
};

const numbersArray2 = [21, 6, 9, 100, 23, 17, 14, 5, 18];
console.log(returnMinNumber(...numbersArray2));

// --- Exercise 11 ---
// Given n natural numbers. Calculate the sum of the largest and smallest given numbers.
// Restrictions and clarifications:
//      -> 1 <= n <= 100
//      -> The n numbers read will have at most 6 digits

function calculateSumFromMinAndMaxNumber(...numbers) {
  if (numbers.length > 6) {
    throw Error('You can input max 6 numbers.');
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 1 || numbers[i] > 100) {
      throw Error('Each number must be between 1 and 100');
    }
  };

  const maxNumber = Math.max(...numbers);
  const minNumber = Math.min(...numbers);

  return maxNumber + minNumber;
};

const numbersArray3 = [2, 7, 11, 12, 90, 30];
console.log(calculateSumFromMinAndMaxNumber(...numbersArray3));


// --- Exercise 12 ---
// Numbers are read from the keyboard until zero appears. Determine the largest value read.
// Restrictions and clarifications: 
//     -> If the first value entered is zero, the message 'DOES NOT EXIST' will be displayed

function findMaxNumberUntilZero(...numbers) {
  if (numbers[0] === 0) {
    throw Error('Does not exist! First number cannot be 0.');
  }
  
  let arrayWithZeroLast = [];
  
  for (let i = 0; i < numbers.length; i++) {
    arrayWithZeroLast.push(numbers[i]);
    
    if (numbers[i] === 0) {
      break;
    }
  };
  
  return Math.max(...arrayWithZeroLast);
};

const numbersArray4 = [4, 6, 20, 34, 0, 222];
console.log(findMaxNumberUntilZero(...numbersArray4));


// --- Exercise 13 ---
// Integers are read from the keyboard until zero appears -> 
// -> Determine the smallest among the positive values read
// Restrictions and clarifications: 
//      -> if there are no positive values among the read values,
//         display the message 'NO POSITIVE VALUES FOUND'.

function findSmallestPositiveValueUntilZero(...numbers) {
  let arrayWithZeroLast = [];
  let countPositive = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      arrayWithZeroLast.push(numbers[i]);
      countPositive++;
    } else if (numbers[i] === 0) {   
      break;
    }
  };
  
  if(!countPositive) {
      throw Error('No positive values found.');
  };

  return Math.min(...arrayWithZeroLast);
};

const numbersArray5 = [-4, 20, 8, -2, 15, 3, 0, 1];
console.log(findSmallestPositiveValueUntilZero(...numbersArray5));