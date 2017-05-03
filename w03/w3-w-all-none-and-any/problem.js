/*
As a part of this warmup, you need to create three functions that one needs to be able to call upon an array:

all

This function returns true only if the predicate supplied returns true for all the items in the array

[1, 2, 3].all(isGreaterThanZero) => true
[-1, 0, 2].all(isGreaterThanZero) => false

none

This function returns true only if the predicate supplied returns false for all the items in the array

[-1, 2, 3].none(isLessThanZero) => false
[-1, -2, -3].none(isGreaterThanZero) => true

any

This function returns true if at least one of the items in the array returns true for the predicate supplied

[-1, 2, 3].any(isGreaterThanZero) => true
[-1, -2, -3].any(isGreaterThanZero) => false
You do not need to worry about the data supplied, it will be an array at all times.
******************************************************/


// [1, 2, 3].all(isGreaterThanZero) => true
// [-1, 0, 2].all(isGreaterThanZero) => false
// *** YOUR CODE HERE ***


Array.prototype.all = function (callback) {
  // for (element of this) {
  //   if (!callback(element)) { // At the first sign of false, return false! Because not ALL are true.
  //     return false;
  //   }
  // }
  // return true;

  return this.filter(callback).length === this.length;

}

console.log([1, 2, 3].all(isGreaterThanZero));
console.log([-1, 0, 2].all(isGreaterThanZero));
// [-1, 2, 3].none(isLessThanZero) => false
// [-1, -2, -3].none(isGreaterThanZero) => true
// *** YOUR CODE HERE ***

Array.prototype.none = function (callback) {
  // for (element of this) {
  //   if (callback(element)) { // At the first sign of true, return false! Because at least ONE is true.
  //     return false;
  //   }
  // }
  // return true;

  return this.filter(callback).length === 0;

}



// [-1, 2, 3].any(isGreaterThanZero) => true
// [-1, -2, -3].any(isGreaterThanZero) => false
// *** YOUR CODE HERE ***

Array.prototype.any = function (callback) {
  // for (element of this) {
  //   if (callback(element)) { // At the first sign of true, return true! Because at least ONE is true.
  //     return true;
  //   }
  // }
  // return false;

  return this.filter(callback).length > 0;

}


// use these to test your array methods!
function isGreaterThanZero(num) {
  return num > 0;
}

function isLessThanZero(num) {
  return num < 0;
}

// write some of your own invocations below,
// do your results match the original expected results?
// *** YOUR CODE HERE ***

module.exports = {
  arrayObj: Array,
  cb: isGreaterThanZero,
  attendance: "wordy word here"
}
