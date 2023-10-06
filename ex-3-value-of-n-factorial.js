// --- Exercise 3 ---
// Write a program that reads the natural number n and determines the value of n! (n factorial)
// Restrictions and clarifications: 0 <= n <= 15
// by definition, 0! = 1

function nFactorial(num) {
  try {
    if(num < 0 || num > 15) {
      throw 'NUMBER_LOWER_OR_HIGHER';
    }

    if(num === 0 || num === 1) {
      return 1;
    }

    let nFactorial = 1;

    for(let i = 2; i <= num; i++) {
      nFactorial = nFactorial * i;
    }

    return nFactorial;
  } catch (e) {
    if (e === 'NUMBER_LOWER_OR_HIGHER') {
      console.log(`Enter a number between 0 and 15 !`);
    }
    return 0;
  }
};

console.log(nFactorial(4));

// using recursive function
function nFactorialRecursive(num) {
  if (num <= 1) {
    return 1;
  }
    
  return nFactorialRecursive(num - 1) * num;
};

console.log(nFactorialRecursive(0));
console.log(nFactorialRecursive(1));
console.log(nFactorialRecursive(2));
console.log(nFactorialRecursive(3));
console.log(nFactorialRecursive(4));