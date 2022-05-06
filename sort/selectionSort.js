// 选择排序：O(n2)
const selectionSort = (arr)=>{
  for(let i=0;i<arr.length;i++){
    let minIndex = i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[minIndex]){
        minIndex=j
      }
    }
    // swap
    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
  }
  return arr
}


const input = [1,9,2,4,8,6,3]

console.log(selectionSort(input))