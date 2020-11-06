/**
 * @param {number[]} arr
 * @return {number}
 */
function sumOddLengthSubarrays(arr) {
  let oddArr = 0;
  for (let i = 0; i < arr.length; ++i) {
    let sum = 0;
    for (let j = i; j < arr.length; ++j) {
      sum += arr[j];
      if ((j - i + 1) % 2 !== 0) oddArr += sum;
    }
  }
  return oddArr;
}

module.exports = sumOddLengthSubarrays
