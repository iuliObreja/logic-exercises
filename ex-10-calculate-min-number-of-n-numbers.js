// --- Exercise 10 ---
// Given n integers. Calculate the smallest of the n given numbers.
// Restrictions and clarifications: 

// method 1:
function calculateMinNumber(numbers) {
    return Math.min(...numbers);
};

// method 2:
function calcMinNumber(numbers) {
    let minNum = calcMaxNumber(numbers);
        
    for (let i = 0; i < numbers.length; i++) { 
        if (minNum > numbers[i]) {
            minNum = numbers[i]
        }
    }

    return minNum;
};


const numbersArray1 = [2, 6, 4, 100, 123, 167, 9, 5, 3];
const numbersArray2 = [21, 6, 9, 4, 23, 17, 14, 26, 28];
const numbersArray3 = [22, 16, 4, -5, 3, 12, 19, 31, 11];
const numbersArray4 = [12, 9, 4, 18, 2, -1, 6, 51, 33, 33];
const numbersArray5 = [3, 66, 72, 13, 21, 67, 9, 16, 23];
const numbersArray6 = [-2, -6, -4, -100, -23, -167, -9, -5, -3];
const numbersArray7 = [-12, -9, -4, -18, -2, -1, -6, -51, -33, 33];

console.log(calculateMinNumber(numbersArray2));
console.log(calculateMinNumber(numbersArray3));

console.log(calcMinNumber(numbersArray1));
console.log(calcMinNumber(numbersArray2));
console.log(calcMinNumber(numbersArray3));
console.log(calcMinNumber(numbersArray4));
console.log(calcMinNumber(numbersArray5));
console.log(calcMinNumber(numbersArray6));
console.log(calcMinNumber(numbersArray7));

// helper function
function calcMaxNumber(numbers) {
    let maxNum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      if (maxNum < numbers[i]) {
        maxNum = numbers[i];
      }
    }
    
    return maxNum;
  };
  