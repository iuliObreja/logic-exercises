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

console.log(returnOddProduct(3));