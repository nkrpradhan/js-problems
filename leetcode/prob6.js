/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("t", t, ...args);
        const promise1 = new Promise((resolve, reject) => {
          setTimeout(resolve, t, "local");
        });
        Promise.race([fn(...args), promise1])
          .then((value) => {
            if (value === "local") {
              reject("Time Limit Exceeded");
            } else {
              resolve(value);
            }
          })
          .catch((e) => reject(e));
      } catch (e) {
        reject(e);
      }
    });
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 50);
limited(10)
  .then((r) => console.log(r))
  .catch(console.log); // "Time Limit Exceeded" at t=100ms
