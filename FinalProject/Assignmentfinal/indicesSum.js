/**
 * 
 * @param {number} nums numbers 
 * @return {number} target  number
 * @returns 
 */
let twoSum = function (nums, target) {
    var result = [];
  
    for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          result.push(i);
          result.push(j);
        }
      }
    }
    return result;
  }
  console.log(twoSum(nums =[2,7,11,15], target =9));
 