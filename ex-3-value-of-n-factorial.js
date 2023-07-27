// --- Exercise 3 ---
// Write a program that reads the natural number n and determines the value of n! (n factorial)
// Restrictions and clarifications: 0 <= n <= 15
// by definition, 0! = 1

function nFactorial(num) {
  try {
    if(num < 0 || num > 15) {
      throw 'NUMBER_LOWER_OR_HIGHER';
    }

    let nFactorial = 1;

    for(let i = 1; i <= num; i++) {
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

console.log(nFactorial(16));