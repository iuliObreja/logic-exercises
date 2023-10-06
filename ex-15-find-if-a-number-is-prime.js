// --- Exercise 15 ---
// Determine if a number is prime

function isPrime(num) {
   if (num < 3) {
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

console.log(isPrime(23));


