// --- Exercise 2 ---
// Write a program that reads the natural number n and determines the sum S=2+4+..+(2n).
// Restrictions and clarifications: 0 < n ≤ 10000

function sumEvenNums(num, divider = 2) {
  try {
    if (num < 0 || num > 10_000) {
      throw "NUMBER_HIGHER";
    }

    let sum = 0;
    
    for (let i = divider; i <= 2 * num; i = i + divider) { 
      sum = sum + i;
    }

    return sum;
  } catch (exc) {
    if (exc === 'NUMBER_HIGHER') {
      console.log(`Your number is higher than 10.000`);
    }
    return 0;
  }
};

console.log(sumEvenNums(20000));
console.log(sumEvenNums(4, 2));
console.log(sumEvenNums(40000));
console.log(sumEvenNums(4));
console.log(sumEvenNums(30000));


// Am invatat ca parametrii functiilor pot avea default values, atribuite
// direct in declaratia functiei - function name(par1, par2 = value) {};

// Am invatat ca "throw" nu "arunca" doar o Eroare, ci o exceptie;
// exceptia poate fi orice, string, numar, obiect, ideea e sa 
// ii fac handle in "catch"

// Am invatat ca starting pointul pt iteratia din "for" poate fi
// initializat direct cu param functiei-> let i = param2, iar
// incrementorul la fel, tot pe baza parametrului funct 
// -> i = i + param2

// Am invatat ca "Try catch" e folosit cel mai bine in interiorul
// functiei, nest-uind tot codul functiei in interiorul "Try-ului",
// unde dam si Throw la exceptie, apoi, dupa "Try", catch-uim eroarea 
// si o tratam
// facem acest lucru pt a nu trata eroarea la fiecare apelare a functiei
// respective
/* 

  function name() {
    try {
      if (condition) {
        throw exception -> nr, string, obj, etc
      }

      return-ul functiei
    } catch (exception) {
        if (exception === ce am pus in throw) {
          console.log(exception) sau ce vrem sa facem cu ea;
        }
      
      in functie de unde avem throw, apelarea functiei poate
      returna "undefined", asa ca dam si un return

      return ce dorim, in functie de caz;
    }
  };

*/