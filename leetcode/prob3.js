/**
 * @param {Function} fn
 */
function memoize(fn) {
  let result = [];
  let argList = [];

  return function (...args) {
    const str = JSON.stringify(args);
    if (result[str] !== undefined) {
      return result[str];
    }
    result[str] = fn(...args);
    return result[str];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
