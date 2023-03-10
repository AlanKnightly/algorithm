
var subarraySum = function (nums, k) {
  const sum = []
  
  const getSum = (i) => {
    sum[i] = 0
    for (let k = 0; k <= i; k++) {
      sum[i] = sum[i] + nums[k]
    }
  }
  for (let i = 0; i < nums.length; i++) {
    getSum(i)
  }

  let startIndex = 0, endIndex = 0;
  let count = 0

  return count
};

const nums = [1, 1, 1], k = 2


console.log(subarraySum(nums, k))

