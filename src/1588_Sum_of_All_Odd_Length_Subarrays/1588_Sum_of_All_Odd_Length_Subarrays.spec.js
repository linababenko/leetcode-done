import sumOddLengthSubarrays from './1588_Sum_of_All_Odd_Length_Subarrays';
const { assert } = require('chai');

describe('Sum of All Odd Length Subarrays', () => {
  const testCase = [
    {arr: [1,4,2,5,3], expected: 58 },
    {arr: [1,2], expected: 3 },
    {arr: [10,11,12], expected: 66 },

  ];

  testCase.forEach( (testCase) => {
    it(`Sum of All Odd Length ${testCase.arr} to equal ${testCase.expected}`, () => {
      assert.equal(sumOddLengthSubarrays(testCase.arr), testCase.expected);
    });
  });
});
