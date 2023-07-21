// --- Exercise 1 --- 
// Read an integer n. Calculate the sum of all natural numbers less than or equal to n
// Restrictions and clarifications: n ≤ 1.000.000

function sumNaturalNums(num) {
  let sum = 0;

  for(let i = 1; i <= num && num <= 1000000; i++) {
    sum += i;
  };

  if(num > 1000000) {
    console.log('Please, enter a number smaller than 1000000!');
  };
 
  return sum;
};

console.log(sumNaturalNums(7));


// --- Exercise 2 ---
// Write a program that reads the natural number n and determines the sum S=2+4+..+(2n).
// Restrictions and clarifications: 0 < n ≤ 10000

function sumEvenNums(num) {
  let sum = 0;

  for(let i = 2; i <= 2 * num && num > 0 && num <= 10000; i++) { 
    if(i % 2 === 0) {
      sum += i;
    };
  };

  if(num <= 0 || num > 10000) {
    console.log('Please, enter a number smaller than 1000000!');
  };
 
  return sum;
};

console.log(sumEvenNums(48));


// --- Exercise 3 ---
// Write a program that reads the natural number n and determines the value of n! (n factorial)
// Restrictions and clarifications: 0 <= n <= 15
// by definition, 0! = 1

function nFactorial(num) {
  let nFactorial = 1;

  for(let i = 1; i <= num && num <= 15; i++) {
    nFactorial *= i;
  };

  if(num < 0 || num > 15) {
    console.log('Please, enter a number between 0 and 15!');
  };

  return nFactorial;
};

console.log(nFactorial(4));


// --- Exercise 4 ---
// Write a program that reads the natural number n and determines the:
// sum S=1*n+2*(n-1)+3*(n-2)+...+n*1.
// Restrictions and clarifications: 0 < n <= 100

function sumFromMultiply(num) {
  let sum = 0;
  let decrementor = num;

  for (let i = 1; i <= num && num > 0 && num <= 100; i++) {
    if (i > 1) {
      sum += i * --decrementor;
      } else {
      sum += i * num;
    };
  };

  if(num < 0 || num > 100) {
    console.log('Please, enter a number between 0 and 100!');
  };

  return sum;
};

console.log(sumFromMultiply(4));


// --- Exercise 5 ---
// Given the nonzero natural number n. Find the product of the first n odd numbers
// Restrictions and clarifications: 1 ≤ n ≤ 15

function returnOddProduct(limit) {
  if (limit <= 0 || limit > 15) {
    throw Error('Please enter a number between 1 and 15!');
  };
  
  let productOfOdd = 1;
  let counterFoundOddNumbers = 0;
  let startingPoint = 1;

  while (counterFoundOddNumbers < limit) {
    if (startingPoint % 2 === 1) {
      counterFoundOddNumbers = counterFoundOddNumbers + 1;
      productOfOdd = productOfOdd * startingPoint;
    }
    startingPoint = startingPoint + 1;
  };
  
  return productOfOdd;
};

console.log(returnOddProduct(4));


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