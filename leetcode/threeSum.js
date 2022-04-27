
const tool =  require('./tool/index') 
const { log } = tool


var threeSum = function(nums) {
  if(!nums || nums.length<3) return []
  let baseIndex= 0, result = []
  // 排序，方便循环时候去重
  nums.sort((a,b)=>a-b)
  while(nums[baseIndex]<=0 && baseIndex<=nums.length-3){
    // baseIndex去重
    while(baseIndex >0 && nums[baseIndex] === nums[baseIndex-1]) {
      baseIndex++
    }
    // 左右指针
    let i = baseIndex+1, j = nums.length-1
    while(i<j){
      const sum = nums[baseIndex]+nums[i]+nums[j]
      if(sum === 0){
        // 记录解并去重
        result.push([nums[baseIndex],nums[i],nums[j]])
        while(nums[i]===nums[i+1]){
          i++
        }
        while(nums[j]===nums[j-1]){
          j--
        }
        i++
        j--
      // 通过题设条件剔除范围，双指针简化为一次循环
      }else if(sum<0){
        i++
      }else{
        j--
      } 

    }
    baseIndex++
  }
  return result
};


const input = [-2,0,0,2,2]

log(threeSum(input))

