// --- Exercise 10 ---
// Given n integers. Calculate the smallest of the n given numbers.
// Restrictions and clarifications: 
//     -> 1 <= n <= 1000
//     -> the given n numbers will have at most 9 digits

function returnMinNumber(...numbers) {
  try {
    if (numbers.length > 9) {
      throw ('MAX_NUMBERS');
    }

    for (let i = 0; i < numbers.length; i++ ) {
      if (numbers[i] < 1 || numbers[i] > 1000) {
        throw ('NUMBER_RANGE');
      }
    }

    return Math.min(...numbers);
  } catch (e) {
      if (e === 'MAX_NUMBERS') {
        console.log(`You can input max 9 numbers`);
      } else {
          console.log(`Numbers entered must be between 1 and 1000`)
      }
      return 0;
  }
};

const numbersArray2 = [21, 6, 9, 100, 23, 17, 14, 5, 28];
console.log(returnMinNumber(...numbersArray2));
