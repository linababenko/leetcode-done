/**
 * @param {number} N
 * @return {number}
 */
function fib(N){
  let a = 0, b = 1, temp;
  if(N<2) return N
  while (N > 0){
    temp = b;
    b = b+a;
    a = temp;
    N--;
  }
  return a;
}
module.exports = fib
