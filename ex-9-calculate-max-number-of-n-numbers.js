// --- Exercise 9 ---
// Given n integers. Calculate the largest of the n given numbers.
// Restrictions and clarifications: 
//     -> 1 <= n <= 1000
//     -> the given n numbers will have at most 9 digits

function returnMaxNumber(...numbers) {
  try {
    if (numbers.length > 9) {
      throw ('MAX_NUMBERS');
    }

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 1000) {
        throw ('NUMBER_RANGE');
      }
    };

    return Math.max(...numbers);
  } catch (e) {
    if (e === 'MAX_NUMBERS' ) {
      console.log(`You can input max 9 numbers`);
    } else if (e === 'NUMBER_RANGE') {
      console.log(`Numbers entered must be between 1 and 1000`);
    }
    return 0;
  }
};

const numbersArray = [2, 6, 90, 100, 23, 167, 9, 5, 7];
console.log(returnMaxNumber(...numbersArray));
