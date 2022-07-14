
const numToSort = [10,4,9,7,2,3,8,5]

const heapify = (arr,size,parentIndex)=>{
  const left = 2*parentIndex+1
  const right = 2*parentIndex+2
  let largestIndex = parentIndex
  if(left<size && arr[left]>arr[largestIndex]) largestIndex = left;
  if(right<size &&arr[right]>arr[largestIndex]) largestIndex = right;
  // 此时的left或right实际上是一个原本的最大值，对其子树heapify
  if(largestIndex !==parentIndex){
    [arr[parentIndex],arr[largestIndex]] = [arr[largestIndex],arr[parentIndex]]
    heapify(arr,size,parentIndex)
  }
}
const buildHeap=(arr)=>{
  const size = arr.length
  let endIndex = Math.floor(size/2)-1 //last non-leaf node
  while(endIndex>=0){
    heapify(arr, size,endIndex)
    endIndex--
  }
}

const sortByHeap = (arr)=>{
  let size = arr.length
  while(size>=2){
    [arr[0],arr[size-1]] = [arr[size-1],arr[0]]
    heapify(arr,--size,0)
  }
}
const heapSort=(arr)=>{
  buildHeap(arr)
  sortByHeap(arr)
}

 heapSort(numToSort)
 console.log(numToSort)

