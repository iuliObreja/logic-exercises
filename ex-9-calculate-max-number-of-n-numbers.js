// --- Exercise 9 ---
// Given n integers. Calculate the largest of the n given numbers.

// method 1:
function calculateMaxNumber(numbers) {
  return Math.max(...numbers);
};

// method 2:
function calcMaxNumber(numbers) {
  let maxNum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
  
  return maxNum;
};

const numbersArray = [2, 6, 4, 100, 23, 167, 9, 5, 3];

console.log(calculateMaxNumber(numbersArray));
console.log(calcMaxNumber(numbersArray));