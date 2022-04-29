
const tool =  require('./tool/index') 
const { log } = tool


var threeSum = function(nums) {
  if(nums.length<3) return []
  const result = []
  nums.sort((a,b)=>a-b)
  log('nums:',nums)
  for(let base =0;base<nums.length-2; base++){
    if(nums[base]>0) return result
    while(base>0 && nums[base]===nums[base-1]){
      base++
    }
    let left = base+1, right = nums.length-1
    while(left<right){
      const sum = nums[base]+nums[left]+nums[right]
      if(sum === 0){
        result.push([nums[base],nums[left],nums[right]])
        while(nums[left]===nums[left+1]){
          left++
        }
        while(nums[right]===nums[right-1]){
          right--
        }
        left++
        right--
      }else if(sum < 0){
        left++
      }else{
        right--
      }
    }
  }
  return result
};


const input = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]

log(threeSum(input))

