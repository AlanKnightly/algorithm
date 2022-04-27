const log = console.log
var threeSumClosest = function(nums, target) {
  let i = 0 , result = [] , delta = null
  while(i <= nums.length-3){
    let base = nums[i]
    let l = i+1, r = nums.length-1
    while(l<r){
      const sum = base + nums[l] + nums[r]
      const diff = Math.abs(target - sum)  
      log('target',target, 'base',base, 'left',nums[l], 'right',nums[r], 'sum', base + nums[l] + nums[r],'diff',diff)
      if(delta !== null){
        if(diff< delta ){
          delta= diff
          result = [base, nums[l], nums[r] ]
        }
      }else{
        delta = diff
        result = [base, nums[l], nums[r] ]

      }
      l++
      if(l===r){
        l = i+1
        r--
      }
    }
    i++
  } 
  console.log('result',result)
  return  result.reduce((a,c)=>a+c,0)
};



const nums = [0,1,2], target = 3

log(threeSumClosest(nums, target))