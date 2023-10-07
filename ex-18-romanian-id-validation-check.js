/*
  Check if an ID is valid or not
  I will do the check for Romanian ID, called "CNP" (Personal Numerical Code)
*/

function checkIdIfValid(id) {

  const numToString = id.toString();
  const idArray = numToString.split('')
                             .map( number => parseInt(number, 10));
  
  const YearMonthDayGroup = idArray.slice(1, 7)
                                   .join('')
                                   .replace(/^(\d{2})(\d{2})(\d{2})$/, '$1/$2/$3');
  
  const isDateValid = (dateStr) => !isNaN(new Date(dateStr));
  
  isDateValid(YearMonthDayGroup);
  
  if  (!isDateValid(YearMonthDayGroup)) {
    return `Your CNP is not valid`;
  }
  
  let sum = 0;
  
  const useForCheck = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
  
  for (let i = 0; i < idArray.length - 1; i++) {
    const idNum = idArray[i];
    const checkNum = useForCheck[i]; 
    sum = sum + idNum * checkNum;  
  }
  
  let controlNumber = sum % 11;
  let lastIdDigit = idArray[idArray.length - 1];
  
  if (controlNumber <= 10 && controlNumber === lastIdDigit && idArray.length === 13) {
    return `Your CNP is valid`;
  }
  
  return `Your CNP is not valid`;
};

console.log(checkIdIfValid(2910218090018));

