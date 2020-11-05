const fib = require('./509_Fibonacci_Number');
const { assert } = require('chai');

describe('Fibonacci Number', () => {
  const testCase = [
    {n: 1, expected: 1 },
    {n: 2, expected: 1 },
    {n: 3, expected: 2 },
    {n: 4, expected: 3 },
    {n: 5, expected: 5 },
    {n: 6, expected: 8 },
    {n: 7, expected: 13 },
    {n: 8, expected: 21 },
    {n: 9, expected: 34 },
    {n: 10, expected: 55 },
    {n: 15, expected: 610 },
    {n: 20, expected: 6765 },
    {n: 30, expected: 832040 },
    {n: 50, expected: 12586269025 },
    {n: 90, expected: 2880067194370816000 },
    {n: 110, expected: 4.356677625885486e+22 },
    {n: 200, expected: 2.8057117299251016e+41 },
  ];

  testCase.forEach( (testCase) => {
    it(`Fiboncci number from ${testCase.n} to equal ${testCase.expected}`, () => {
      assert.equal(fib(testCase.n), testCase.expected);
    });
  });
});
