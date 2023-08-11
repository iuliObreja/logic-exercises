// --- Exercise 11 ---
// Given n natural numbers. Calculate the sum of the largest and smallest given numbers.
// Restrictions and clarifications:
//      -> 1 <= n <= 1000
//      -> The n numbers read will have at most 6 digits

// method 1:
function calcMaxPlusMinNumber(numbers) {
  try {
    if (numbers.length > 6) {
      throw ('MAX_NUMBERS');
    }

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 1000) {
        throw ('NUMBER_RANGE');
      }
    }

    const maxNumber = Math.max(...numbers);
    const minNumber = Math.min(...numbers);

    return maxNumber + minNumber;
  } catch (e) {
    if (e === 'MAX_NUMBERS') {
      console.log(`You can input max 6 numbers`);
    } else {
      console.log(`Numbers entered must be between 1 and 1000`);
    }
    return 0;
  }
};

// method 2 - no restrictions:
function calculateMaxPlusMinNumber(numbers) {
  let countPositiveNum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      countPositiveNum = countPositiveNum + 1;
    }
  }

  if (countPositiveNum === 0) {
    return calculateMaxNegativeNumber(numbers) + calcMinNumber(numbers);
  }
  
  return calcMaxNumber(numbers) + calcMinNumber(numbers); 
}

const numbersArray1 = [2, 7, 11, 12, 90, 30];
const numbersArray2 = [-2, -10, -7, -100, -34, -4, -33];

console.log(calcMaxPlusMinNumber(numbersArray1));
console.log(calcMaxPlusMinNumber(numbersArray2));

console.log(calculateMaxPlusMinNumber(numbersArray1));
console.log(calculateMaxPlusMinNumber(numbersArray2));


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

// helper function
function calcMinNumber(numbers) {
  let minNum = calcMaxNumber(numbers);
      
  for (let i = 0; i < numbers.length; i++) { 
      if (minNum > numbers[i]) {
          minNum = numbers[i]
      }
  }

  return minNum;
};

// helper function
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

    return 100;
  }
};