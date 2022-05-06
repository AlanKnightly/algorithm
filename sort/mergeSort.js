// 归并排序 O(nlogn)
const mergeSort = (arr)=>{
  if(arr.length<2) return arr
  const mid = Math.floor(arr.length/2)
  console.log('mid index:',mid)
  const left = arr.slice(0,mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

const merge = (left,right)=>{
  const result = []
  while(left.length && right.length){
    if(left[0]<=right[0]){
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  while(left.length){
    result.push(left.shift())
  }
  while(right.length){
    result.push(right.shift())
  }
  return result
}



console.log(mergeSort([1,5,8,2,7,4,6,9]))