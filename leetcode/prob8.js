/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  let start = 0;
  let end = n;
  let count = 0;
  let result = [];
  while (functions.length > 0) {
    count++;
    console.log("while loop", count, ...functions);
    const arrfn = functions.slice(start, end);
    // let newresult = await Promise.all([...arrfn.map((item) => item())]);
    let newresult = await Promise.all([...arrfn.map((item) => item())]);
    result.push(...newresult);
    console.log("new result", result);
    functions.splice(start, end);
  }
  console.log("result--", result);
  return Promise.resolve(result);
};

promisePool(
  [
    () => new Promise((res) => setTimeout(res, 300)),
    () => new Promise((res) => setTimeout(res, 400)),
    () => new Promise((res) => setTimeout(res, 200)),
  ],
  2
).then(console.log); // After 900ms
