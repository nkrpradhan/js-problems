var promisePool = async function (functions, n) {
  let fnPr = [...functions];
  let poolSize = 0;
  return new Promise(async (resolve, reject) => {
    function recursiveFn() {
      if (poolSize===0 && fnPr.length === 0) resolve();

      while (fnPr.length > 0 && poolSize < n) {
        poolSize++;
        console.log("poolSize--", poolSize, fnPr.length);
        const firstfn = fnPr.shift()();
        firstfn.then(() => {
          poolSize--;
          console.log("resolved inner fn", poolSize);
          recursiveFn();
        });
      }
    }
    recursiveFn();
  });
};

promisePool(
  [
    () => new Promise((res) => setTimeout(res, 300)),
    () => new Promise((res) => setTimeout(res, 400)),
    () => new Promise((res) => setTimeout(res, 200)),
  ],
  2
).then(() => console.log("fn call")); // After 900ms
