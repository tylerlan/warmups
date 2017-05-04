/* Given two integers, which can be positive and negative,
find the sum of all the numbers between and including a and b,
and return the sum. If both numbers are equal return a or b.

Note! a and b are not ordered!

Example:
getSum(1, 0) == 1   // 1 + 0 = 1
getSum(1, 2) == 3   // 1 + 2 = 3
getSum(0, 1) == 1   // 0 + 1 = 1
getSum(1, 1) == 1   // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function getSum( a, b ) {
  let max = Math.max(a, b);
  let min = Math.min(a, b)
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;

} // END FUNCTION


module.exports = {
  getSum:getSum,
  attendance:"WORD UP"
}
