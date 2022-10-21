const nums = [2,7,11,15], target = 9

function solution1(nums,target){
  const m = new Map()
  nums.forEach((n,i)=>{
    m.set(n,i)
  })
  nums.sort((a,b)=>a-b)
  let i = 0,j=nums.length-1
  while(i<j){
   if(nums[i]+nums[j]===target){
    return [m.get(nums[i]) ,m.get(nums[j]) ] 
   }else if(nums[i]+nums[j]<target){
    i++
   }else{
    j--
   }
  }
  return null
}

function solution2(nums,target){
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[j]===target-nums[i]) return [i,j]
    } 
  }
} 



console.log(solution2(nums,target))