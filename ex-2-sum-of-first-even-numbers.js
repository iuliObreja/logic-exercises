// --- Exercise 2 ---
// Write a program that reads the natural number n and determines the sum S=2+4+..+(2n).
// Restrictions and clarifications: 0 < n ≤ 10000

function sumEvenNums(num, divider = 2) {
  try {
    if (num < 0 || num > 10_000) {
      throw "NUMBER_HIGHER";
    }

    let sum = 0;
    
    for (let i = divider; i <= 2 * num; i = i + divider) { 
      sum = sum + i;
    }

    return sum;
  } catch (exc) {
    if (exc === 'NUMBER_HIGHER') {
      console.log(`Your number is higher than 10.000`);
    }
    return 0;
  }
};

console.log(sumEvenNums(20000));
console.log(sumEvenNums(4, 2));
console.log(sumEvenNums(40000));
console.log(sumEvenNums(4));
console.log(sumEvenNums(30000));