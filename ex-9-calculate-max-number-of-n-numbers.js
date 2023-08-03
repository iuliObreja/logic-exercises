// --- Exercise 9 ---
// Given n integers. Calculate the largest of the n given numbers.
// Restrictions and clarifications: 

// Cerinta++ :
// cel mai mare nr - functie separata
// cel mai mare nr < 0 - functie separata
// sa se determine daca un numar n, primit de la tastatura, este prim
// sa se determine nr prime pana la n, unde n este input


function returnMaxNumber(numbers) {
    return Math.max(...numbers);
};

function calcMaxNumber(numbers) {
  let maxNum = 0;

  for (let i = 0; i < numbers.length; i++) {
    console.log(i);
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
  }
 
  return maxNum;
};

const numbersArray1 = [2, 6, 4, 100, 23, 167, 9, 5, 3];
const numbersArray2 = [21, 6, 9, 4, 23, 17, 14, 26, 28];
const numbersArray3 = [22, 16, 4, -5, 3, 12, 19, 31, 11];
const numbersArray4 = [12, 9, 4, 18, 2, -1, 6, 51, 33, 33];
const numbersArray5 = [3, 66, 72, 13, 21, 67, 9, 16, 23];
const numbersArray6 = [-2, -6, -4, -100, -23, -167, -9, -5, -3];
const numbersArray7 = [-12, -9, -4, -18, -2, -1, -6, -51, -33, 33];



// console.log(returnMaxNumber(numbersArray));
// console.log(calcMaxNumber(numbersArray));

// arr = [2, 6, 90, 100, 23, 167, 9, 5, 7]
// presupunem ca avem cel mai mare nr natural, care este 0
// comparam acest cel mai mare nr natural, pe rand, cu toate nr din sir
// daca gasim un nr in sir mai mare decat cel mai mare nr natural,
// ii atribuim celui mai mare nr natural, noua valoare gasita