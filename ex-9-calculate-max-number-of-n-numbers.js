// --- Exercise 9 ---
// Given n integers. Calculate the largest of the n given numbers.

// method 1:
function calculateMaxNumber(numbers) {
  return Math.max(...numbers);
};

// method 2:
// arr = [2, 6, 90, 100, 23, 167, 9, 5, 7]
// presupunem ca avem cel mai mare nr natural, care este 0
// comparam acest cel mai mare nr natural, pe rand, cu toate nr din sir
// daca gasim un nr in sir mai mare decat cel mai mare nr natural,
// ii atribuim celui mai mare nr natural, noua valoare gasita

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