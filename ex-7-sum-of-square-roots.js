// --- Exercise 7 ---
// Given N, a nonzero natural number, calculate the sum S = 1**2 + 2**2 + 3**2 + ... + n**2
// Restrictions and clarifications: 1 <= N <= 30

function returnSumOfSquareNumbers(num) {
  try {
    if (num < 1 || num > 30) {
      throw Error('NUMBER_SMALLER_OR_HIGHER');
    }

    let sumOfSquareNumbers = 0;

    for (let i = 1; i <= num; i++) {
      sumOfSquareNumbers = sumOfSquareNumbers + i**2;
    }

    return sumOfSquareNumbers;
  } catch (e) {
    if (e) {
      console.log(`${e} - Enter a number between 1 and 30 !`);
    }
    return 0;
  }
};

console.log(returnSumOfSquareNumbers(3));
