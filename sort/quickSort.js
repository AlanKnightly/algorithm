// 快速排序：O(NlogN)
const quick = (arr,l,r)=>{
   const left = typeof l !== 'number' ? 0 : l
   const right = typeof l !== 'number' ? arr.length -1 : r
   if(left<right){
     const pIndex = partition(arr,left,right)
     quick(arr,left,pIndex-1)
     quick(arr,pIndex+1,right)
   }
   return arr
}

const partition = (arr,l,r)=>{
  const pivot = l;
  let indexToSwap = pivot+1
  for(let i=indexToSwap;i<=r;i++){
    if(arr[i]<arr[pivot]){
      [arr[i],arr[indexToSwap]] = [arr[indexToSwap], arr[i]] 
      indexToSwap++
    }
  }
  [arr[pivot],arr[indexToSwap-1]] = [arr[indexToSwap-1], arr[pivot]] 
  return indexToSwap-1
}


const input = [1,11,9,2,4,8,6,3]

console.log(quick(input))