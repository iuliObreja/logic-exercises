// --- Exercise 14 ---
// Calculate greatest negative number:

function calculateMaxNegativeNumber(numbers) {
  try {
    let negativeNumbersArray = [];
    
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (numbers[i] < 0) {
        negativeNumbersArray.push(numbers[i]);
      } 
    }
    
    let maxNegNum = negativeNumbersArray[0];
    if (negativeNumbersArray[0] === undefined) {
      throw `NO_NEGATIVE_NUMBER`;
    }
    
    if (negativeNumbersArray.length === 1) {
      return maxNegNum;
    }
    
    for (let i = 1; i < negativeNumbersArray.length; i++) {
      if (maxNegNum < negativeNumbersArray[i]) {
        maxNegNum = negativeNumbersArray[i];
      }
    }
    
    return maxNegNum;
  } catch (e) {
    console.log(`The input have no negative numbers!`);

    return 0;
  }
};

const numbersArray1 = [2, 6, 4, 100, 23, 167, 9, 5, 3];
const numbersArray2 = [21, 6, 9, 4, 23, 17, 14, 26, 28];
const numbersArray3 = [22, 16, 4, -5, 3, 12, 19, 31, 11];
const numbersArray4 = [12, 9, 4, -2, 18, 2, -7, 6, 51, 33, 33];
const numbersArray5 = [3, 66, 72, 13, 21, 67, 9, 16, 23];
const numbersArray6 = [-2, -6, -4, -100, -23, -167, -9, -5, -3];
const numbersArray7 = [-12, -9, -4, -18, -2, -1, -6, -51, -33, 33];

console.log(calculateMaxNegativeNumber(numbersArray1));
console.log(calculateMaxNegativeNumber(numbersArray2));
console.log(calculateMaxNegativeNumber(numbersArray3));
console.log(calculateMaxNegativeNumber(numbersArray4));
console.log(calculateMaxNegativeNumber(numbersArray5));
console.log(calculateMaxNegativeNumber(numbersArray6));
console.log(calculateMaxNegativeNumber(numbersArray7));