/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const arr = [];
  let str1 = "";
  let str2 = "";
  let flag = false;
  const total = Math.pow(2, low) + Math.pow(2, high);
  for (let i = low; i <= high; i++) {
    for (let j = 0; j < Math.pow(2, i); j++) {
      if (j === 0) str1 = str1.padEnd(i, "0");
      for (let k = str1.length - 1; k >= 0; k--) {
        console.log("--k--", str1[k]);
        if (k === str1.length - 1) {
          binarySum(str1[k], 1);
        }
        console.log("--new str--", str1);
      }
      console.log(j, i, str1);
    }
  }
};
function binarySum(num1, num2) {
  if (num1 === 1 && num2 === 1) {
    return { result: 0, carry: 1 };
  } else if (num1 === 0 && num2 === 0) {
    return { result: 0, carry: 0 };
  } else {
    return { result: 1, carry: 0 };
  }
}
console.log(countGoodStrings(3, 3, 1, 1));
