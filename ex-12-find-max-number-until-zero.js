// --- Exercise 12 ---
// Numbers are read from the keyboard until zero appears. Determine the largest value read.
// Restrictions and clarifications: 
//     -> If the first value entered is zero, the message 'DOES NOT EXIST' will be displayed

function findMaxNumberUntilZero(numbers) {
  try {
    if (numbers[0] === 0) {
      throw Error('DOES_NOT_EXIST');
    }
    
    let arrayWithZeroLast = [];
    
    for (let i = 0; i < numbers.length; i++) {
      arrayWithZeroLast.push(numbers[i]);
      
      if (numbers[i] === 0) {
        break;
      }
    };
    
    return Math.max(...arrayWithZeroLast);
  } catch (e) {
      if (e) {
        console.log(`${e} - First number cannot be 0`);
      }
      return 0;
  }
};

const numbersArray4 = [0,4, 6, 20, 34, 0, 222];
console.log(findMaxNumberUntilZero(numbersArray4));