/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] + nums[j] === target) {
        console.log(nums[i], nums[j], i, j);
        return [i, j];
      }
    }
  }
  return [];
};

const result = twoSum([2, 5, 5, 11], 10);
console.log(result);
