// 冒泡排序：O(n2)
const bubbleSort = (arr)=>{
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
      if(arr[j]>=arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}


const input = [1,9,2,4,8,6,3]

console.log(bubbleSort(input))