/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
  let counter = 0;
  for(let element of nums){
    if(String(element).length % 2 === 0) counter++;
  }
  return counter;
}

module.exports = findNumbers
