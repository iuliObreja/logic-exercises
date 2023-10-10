// --- Exercise 19 ---
// -> Write a program that reads a string of n natural numbers and 
// determines the number in the string that has the smallest first digit. 
// If there are more than one number with the lowest first digit, 
// the highest among them will be determined.

function maxIntegWithFirstMinDigit(arr) {
  const strNumsArr = arr.join(' ').split(' ');
  let numFirstSmallDigit = strNumsArr[0];
  
  for (let i = 1; i < strNumsArr.length; i++) {
    if (strNumsArr[i][0] < numFirstSmallDigit[0]) {
      numFirstSmallDigit = strNumsArr[i];
    } else if (strNumsArr[i][0] === numFirstSmallDigit[0] && strNumsArr[i] > numFirstSmallDigit) {
      numFirstSmallDigit = strNumsArr[i];
    }
  }

  return numFirstSmallDigit;
};


const array = [72, 30, 12, 165, 120, 725];
console.log(maxIntegWithFirstMinDigit(array));