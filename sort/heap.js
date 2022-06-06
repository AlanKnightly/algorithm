/**
 * heap
 * @get
 * @peek
 * @increase
 * @decrease
 * @insert
 * @remove[like insert]
 */


const heapify =(arr,size,pIndex)=>{
  let largest = pIndex
  const leftIndex = 2*pIndex+1
  const rightIndex = 2*pIndex+2
  if(leftIndex<size &&arr[leftIndex]>arr[largest]){
    largest = leftIndex
  }
  if(rightIndex<size &&arr[rightIndex]>arr[largest]){
    largest = rightIndex
  }
  if(largest!== pIndex){
    let temp = arr[pIndex]
    arr[pIndex] = arr[largest]
    arr[largest] = temp
    heapify(arr,size,largest)
  }
}

const buildHeap =(arr)=>{
  const size = arr.length
  const startIndex = Math.floor(size/2)-1
  for(let i=startIndex;i>=0;i--){
    heapify(arr,size,i)
  }
}

const sortByHeap = (arr)=>{
  const len = arr.length
  for(let i = len-1;i>0;i--){
    let temp = arr[0]
    arr[0] =  arr[i]
    arr[i] = temp
     heapify(arr,i,0)
  }
}

const heapSort = (arr)=>{
  try{
    buildHeap(arr)
    sortByHeap(arr)
  // }
    console.log('2:',arr)
  }catch(e){
    console.log(e)
  }
}

const numToSort = [10,4,9,7,2,3,8,5]


heapSort(numToSort)