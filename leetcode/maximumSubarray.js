var maxSubArray = function(nums) {
  let max = nums[0];// -Infinity ,
  let curSum = 0;
  for(let i=1;i<nums.length;i++){
    curSum = Math.max(curSum+nums[i] , 0)  
    max= Math.max(max,curSum )
  }
  return max
};

const input = [-2,1,-3,4,-1,2,1,-5,4]


console.log(maxSubArray(input)) 