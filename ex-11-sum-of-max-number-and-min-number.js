// --- Exercise 11 ---
// Given n natural numbers. Calculate the sum of the largest and smallest given numbers.
// Restrictions and clarifications:
//      -> 1 <= n <= 100
//      -> The n numbers read will have at most 6 digits

function calculateSumFromMinAndMaxNumber(...numbers) {
  try {
    if (numbers.length > 6) {
      throw ('MAX_NUMBERS');
    }

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 100) {
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
      console.log(`Numbers entered must be between 1 and 100`);
    }
    return 0;
  }
};

const numbersArray3 = [2, 7, 11, 12, 90, 30];
console.log(calculateSumFromMinAndMaxNumber(...numbersArray3));