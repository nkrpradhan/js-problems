/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = function (fn) {
  return function curryFn(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curry.apply(this, args.concat(args2));
      };
    }
  };
};

function sum(a, b) {
  return a + b;
}
const csum = curry(sum);
// csum(1)(2); // 3
console.log(csum(1)(2));
