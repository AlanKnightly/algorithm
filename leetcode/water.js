const log = console.log
var maxArea = function(height) {
  let left = 0, right = height.length-1;
  const getResult = ()=>{
    const w = right - left
    const h = Math.min(height[left],height[right])
    log(`left ${left} right ${right} w ${w} h ${h} result: ${w*h}`)
    return w*h
  } 
  let result  = getResult()
  while(left!== right){
      if(height[left]<=height[right]){
        left++
      }else{
       right--
      }
      const newResult = getResult()
      if(newResult>result) result = newResult
  }
  return result
};


const testHeight = [2,3,10,5,7,8,9]

const r= maxArea(testHeight)

console.log(r)