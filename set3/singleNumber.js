// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements
// appear exactly twice. Find the two elements that appear only once.
// For example:
// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
// linear time
// constant space

function findOnce (array) {
  var result = [null, null];
  for (var i = 0; i < array.length; i++) {
    if (typeof(result[0]) !== 'number') {
      result[0] = array[i];
    } else if (typeof(result[1]) !== 'number' && result[0] !== array[i]) {
      result[1] = array[i]
    } else if (result[0] === array[i]) {
      result[0] = null;
    } else if (result[1] === array[i]) {
      result[1] = null;
    }
  }
  return result;
}

console.log(findOnce([1,2,1,3,2,5]))

