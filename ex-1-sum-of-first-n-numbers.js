// --- Exercise 1 --- 
// Read an integer n. Calculate the sum of all natural numbers less than or equal to n
// Restrictions and clarifications: n ≤ 1.000.000

function sumNaturalNums(num) {
  if(num > 1_000_000) {
    throw Error('Please, enter a number smaller than 1.000.000!');
  };
 
  let sum = 0;
  
  for(let i = 1; i <= num; i++) {
    sum = sum + i;
  };
 
  return sum;
};


function sumNaturalNumbers(n) {
  return n * (n + 1) / 2;
};

console.time("Start 2");
console.log(sumNaturalNumbers(10));
console.timeEnd("Start 2");

console.time("start 1");
console.log(sumNaturalNums(10));
console.timeEnd("start 1");

// try {
//   console.log(`I'm trying..`);
//   console.log(sumNaturalNums(10));
//   throw Error(`I'm not trying anymore!`);
//   console.log(sumNaturalNums(1_000_001));
// } catch (error) {
//   console.log(`But i caught this error-> ${error}`);
//   } finally {
//   console.log(`And I'm finally done with my job.`);
// };


// Am invatat sa folosesc throw Error in primele linii din block din functie
// astfel am reusit sa elimin o conditie din if statement si sa opresc 
// executia codului imediat ce nu indeplineste conditia

// Am invatat ca fiecare algoritm are un nivel de complexitate pe baza de "n" care variaza in functie 
// de nr de operatii pe care il face (se poate verifica cu console.time si console.timeEnd unde va fi afisat
// timpul in care se executa operatiile (in ms))

// Am invatat ca pot "prinde" o eroare cu "try catch", pt a nu mi se mai opri executia codului
// dupa intalnirea unei erori
//        se foloseste exact acolo unde se intampla eroarea, de ex, la apelarea unei functii, nu in functie

