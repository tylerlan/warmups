// Write a method that returns true if a given parameter is a power of 4,
// and false if it's not. If parameter is not an Integer (eg String, Array)
// method should return false as well.
//Also write a recursive version

function powerOf4(x) {
  let logBaseFour = Math.log(x) / Math.log(4);
  if (logBaseFour > 0) {
    return Number.isInteger(logBaseFour) ? true : false;
  } else {
    return false;
  }

}

function powerOf4I(x) {

  if(isNaN(x)) {
    return false;
  }
  if (x < 4) {
    return false;
  }
  while ( x >= 4) {
    x /= 4;
  }
  return x === 1;

}

function powerOf4R(x) {
  let dividedByFour = x / 4;

  if (dividedByFour === 4 || dividedByFour === 1) {
    return true;
  } else if (dividedByFour > 4) {
    powerOf4R (dividedByFour);
  } else {
    return false;
  }
}

console.log('FALSE', powerOf4R('foo')) //.to.be.equal(false);
console.log('FALSE', powerOf4R(true)) //.to.be.equal(false);
console.log('FALSE', powerOf4R([1, 2, 3])) //.to.be.equal(false);

console.log('FALSE', powerOf4R(0)) //.to.be.equal(false);
console.log('FALSE', powerOf4R(1)) //.to.be.equal(false);
console.log('FALSE', powerOf4R(12)) //.to.be.equal(false);
console.log('FALSE', powerOf4R(8)) //.to.be.equal(false);

console.log('TRUE', powerOf4R(4)) //.to.be.equal(true);
console.log('TRUE', powerOf4R(16)) //.to.be.equal(true);
console.log('TRUE', powerOf4R(1048576)) //.to.be.equal(true);

module.exports = {
  powerOf4I: powerOf4I,
  powerOf4R: powerOf4R,
  attendance: "wordy word here"
};
