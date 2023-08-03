// --- Exercise 10 ---
// Given n integers. Calculate the smallest of the n given numbers.
// Restrictions and clarifications: 

function returnMinNumber(numbers) {
    return Math.min(...numbers);
};

const numbersArray1 = [2, 6, 4, 100, 123, 167, 9, 5, 3];
const numbersArray2 = [21, 6, 9, 4, 23, 17, 14, 26, 28];
const numbersArray3 = [22, 16, 4, -5, 3, 12, 19, 31, 11];
const numbersArray4 = [12, 9, 4, 18, 2, -1, 6, 51, 33, 33];
const numbersArray5 = [3, 66, 72, 13, 21, 67, 9, 16, 23];
console.log(returnMinNumber(numbersArray2));

// Haumworc


