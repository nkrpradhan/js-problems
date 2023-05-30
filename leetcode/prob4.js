/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = function (fn) {
  let finalargs = [];
  return function curryFn(...args) {
    finalargs.push(...args);
    console.log("finalargs--", ...finalargs);
    if (finalargs.length >= fn.length) {
      return fn(...finalargs);
    } else {
      console.log("else", ...args);
      return curryFn;
    }
  };
};
