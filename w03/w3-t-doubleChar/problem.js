// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function,
// return "Ruh roh! That isn't a string!"

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// DONE?? Do it with a RegEx! (a 2 line solution is possible)

function doubleChar(str) {

return typeof str === 'string' ? str.split('').map( (char) => char + char ).join('') : "Ruh roh! That isn't a string!";

// if (typeof str === 'string') {
//   // var result = [];
//   //
//   // let arr = str.split('');
//   //
//   // let strStr = arr.forEach( (char) => {
//   //   result.push(char, char);
//   // } );
//   //
//   // return result.join('');
//
//   let result = str.split('').map( (char) => char + char ).join('');
//   return result;
//
// } else {
//   return "Ruh roh! That isn't a string!";
// }

}

module.exports = {
  doubleChar:doubleChar,
  attendance:"wordy word here"
}
