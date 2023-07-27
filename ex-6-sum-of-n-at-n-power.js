// --- Exercise 6 ---
// Write a program that reads the natural number "n" and determines the
// sum s = 1**1 + 2**2 + ... + n**n
// Restrictions and clarifications: 0 < n <= 15

function returnSumOfExponentiatedNumbers(num) {
  try { 
    if (num <= 0 || num > 15) {
      throw Error('NUMBER_SMALLER_OR_HIGHER');
    }

    let sum = 0;

    for (let i = 1; i <= num; i++) {
      sum = sum + i**i;
    }

    return sum;
  } catch (e) {
    if (e) {
      console.log(`${e} - Enter a number between 1 and 15 !`);
    }
    return 0;
  }
};

console.log(returnSumOfExponentiatedNumbers(2));