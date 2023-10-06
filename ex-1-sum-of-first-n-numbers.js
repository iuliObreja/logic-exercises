// --- Exercise 1 --- 
// Read an integer n. Calculate the sum of all natural numbers less than or equal to n
// Restrictions and clarifications: n ≤ 1.000.000

// method 1:
function sumNaturalNums(num) {
  if(num > 1_000_000) {
    throw Error('Please, enter a number smaller than 1.000.000!');
  };
 
  let sum = 0;
  
  for(let i = 1; i <= num; i++) {
    sum = sum + i;
  };
 
  return sum;
};

// method 2 - no restrictions
function sumNaturalNumbers(n) {
  return n * (n + 1) / 2;
};

// method 3 - recursive function
function sumNaturalNumbersRecursive(n) {
  if (n <= 1) {
    return 1;
  }
  
  return sumNaturalNumbersRecursive(n - 1) + n;
};

console.log(sumNaturalNumbersRecursive(10));

console.time("Start 2");
console.log(sumNaturalNumbers(10));
console.timeEnd("Start 2");

console.time("start 1");
console.log(sumNaturalNums(10));
console.timeEnd("start 1");
