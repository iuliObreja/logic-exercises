// --- Exercise 5 ---
// Given the nonzero natural number n. Find the product of the first n odd numbers
// Restrictions and clarifications: 1 ≤ n ≤ 15

function returnOddProduct(limit) {
  try {
    if (limit <= 0 || limit > 15) {
      throw ('NUMBER_SMALLER_OR_HIGHER');
    };
    
    let productOfOdd = 1;
    let counterFoundOddNumbers = 0;
    let startingPoint = 1;

    while (counterFoundOddNumbers < limit) {
      if (startingPoint % 2 === 1) {
        counterFoundOddNumbers = counterFoundOddNumbers + 1;
        productOfOdd = productOfOdd * startingPoint;
      }
      startingPoint = startingPoint + 1;
    };
    
    return productOfOdd;
  } catch (e) {
    if (e === 'NUMBER_SMALLER_OR_HIGHER') {
      console.log(`Enter a number between 0 and 15 !`);
    }

    return 0;
  }
};

console.log(returnOddProduct(4));


// using recursive function
function calculateOddProductRecursive(num, counter = 0, startingPoint = 1) {
  if (counter === num - 1) {
    return startingPoint;
  }
    
  counter = counter + 1;

  return calculateOddProductRecursive(num, counter, startingPoint + 2) * startingPoint;
};

console.log(calculateOddProductRecursive(4));

// num = 4, counter = 0, startingPoint = 1
// 0 === 4 - 1 ? nu
// counter = 0 + 1 => counter = 1
//  return(4, 1, 3) * 1

// num = 4, counter = 1, startingPoint = 3
// 1 === 4 - 1? nu
// counter = 1 + 1 => counter = 2
//  return(4, 2, 5) * 3 

// num = 4, counter = 2, startingPoint = 5
// 2 === 4 - 1 ? nu
// counter = 2 + 1 => counter = 3
//  return(4, 3, 7) * 5

// num = 4, counter = 3, startingPoint = 7
// 3 === 4 - 1 ? da => return 7

// return 7 * 5 * 3 * 1 = 105
