// --- exercise 1 --- 
// Read an integer n. Calculate the sum of all natural numbers less than or equal to n
// Restrictions and clarifications: n ≤ 1.000.000

function sumNaturalNums(num) {
  let sum = 0;

  for(let i = 1; i <= num && num <= 1000000; i++) {
    sum += i;
  }

  if(num > 1000000) {
    console.log('Please, enter a number smaller than 1000000!');
  } 
 
  return sum;
};

console.log(sumNaturalNums(7));