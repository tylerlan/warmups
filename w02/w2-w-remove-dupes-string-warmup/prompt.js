// Write a function named removeDupes which takes a string and removes
// all duplicate characters in the String. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named removeDupesCI which takes a string and removes
// all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupesCI('AABB'); // 'AB'
//   removeDupesCI('AaAaBbBb'); // 'AB'
//   removeDupesCI('cAtCaT'); // 'cAt'


function removeDupes(input) {
  let seenBefore = []

  let inputArray = input.split('');

  for (element of inputArray) {
    if (seenBefore.includes(element) !== true) {
      seenBefore.push(element);
    }
  }

  return seenBefore.join('');

}

/* ALTERNATE SOLUTIONS */

function removeDupesWithObjKeys(input) {
  let uniqueCharObj = {};
  let inputArray = input.split('');

  inputArray.forEach(char => {
    uniqueCharObj[char] = 1
  });

  return Object.keys(uniqueCharObj).join('');

}

function removeDupesWithSet(input) {
  let uniqueCharSet = new Set();
  let inputArray = input.split('');

  for (element of inputArray) {
    uniqueCharSet.add(element)
  }

  return [...uniqueCharSet].join('');

}

/* ================== */

//CI for case insensitive
function removeDupesCI(input) {
  let seenBefore = []

  let inputArray = input.split('');

  for (element of inputArray) {
    if (seenBefore.includes(element.toUpperCase()) !== true && seenBefore.includes(element.toLowerCase()) !== true) {
      seenBefore.push(element);
    }
  }

  return seenBefore.join('');

}

module.exports = {
  removeDupes: removeDupes,
  removeDupesCI: removeDupesCI,
  attendance: "ENTER ATTENDANCE HERE"
};
