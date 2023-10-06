// --- Exercise 16 ---
// Find prime numbers up to input

function primeNumbersUpToInput(num) {
 let primeNumbersArray = [];

  for (let i = 1; i <= num; i++) {
    isPrime(i);

    if (isPrime(i) === true) {
      primeNumbersArray.push(i);
    }
  }

 return primeNumbersArray;
};

console.log(primeNumbersUpToInput(100));

// helper function
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  let notPrimeRange = 0;

  for (let i = 1; i <= num; i++) {
    if (i > 1 && i < num) {
      notPrimeRange = i;
    }

    if (num % notPrimeRange === 0) {
      return false;
    }
  };

  return true;
};