// --- Exercise 13 ---
// Integers are read from the keyboard until zero appears -> 
// -> Determine the smallest among the positive values read
// Restrictions and clarifications: 
//      -> if there are no positive values among the read values,
//         display the message 'NO POSITIVE VALUES FOUND'.

function findSmallestPositiveValueUntilZero(...numbers) {
  let arrayWithZeroLast = [];
  let countPositive = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      arrayWithZeroLast.push(numbers[i]);
      countPositive++;
    } else if (numbers[i] === 0) {   
      break;
    }
  };
  
  if(!countPositive) {
      throw Error('No positive values found.');
  };

  return Math.min(...arrayWithZeroLast);
};

const numbersArray5 = [-4, 20, 8, -2, 15, 3, 0, 1];
console.log(findSmallestPositiveValueUntilZero(...numbersArray5));