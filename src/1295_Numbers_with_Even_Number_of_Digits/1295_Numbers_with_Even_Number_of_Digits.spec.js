import findNumbers from './1295_Numbers_with_Even_Number_of_Digits';
const { assert } = require('chai');

describe('Find Numbers with Even Number of Digits', () => {
  const testCase = [
    {n: [12,345,2,6,7896], expected: 2 },
    {n: [555,901,482,1771], expected: 1 },
  ];

  testCase.forEach( (testCase) => {
    it(`Digits ${testCase.n} have ${testCase.expected} Even Number`, () => {
      assert.equal(findNumbers(testCase.n), testCase.expected);
    });
  });
});
