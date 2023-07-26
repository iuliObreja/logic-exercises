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