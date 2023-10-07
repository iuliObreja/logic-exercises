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

console.log(primeNumbersUpToInput(17));

// helper function
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  };

  return true;
};