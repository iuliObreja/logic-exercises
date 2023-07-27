// --- Exercise 4 ---
// Write a program that reads the natural number n and determines the:
// sum S=1*n+2*(n-1)+3*(n-2)+...+n*1.
// Restrictions and clarifications: 0 < n <= 100

function sumFromMultiply(num) {
  try {
    if(num < 0 || num > 100) {
      throw ('NUMBER_LOWER_OR_HIGHER');
    };

    let sum = 0;
    let decrementor = num;

    for (let i = 1; i <= num; i++) {
      if (i > 1) {
        sum = sum + i * --decrementor;
        } else {
        sum = sum + i * num;
      };
    };

    return sum;
  } catch (e) {
     if (e === 'NUMBER_LOWER_OR_HIGHER') {
      console.log(`Enter a number between 0 and 100 !`);
     }
     return 0;
   }
};

console.log(sumFromMultiply(300));