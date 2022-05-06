// 插入排序：O(n2)
const insertSort = (arr)=>{
  for(let i=1;i<arr.length;i++){
    let preIndex = i-1 , current = arr[i]
    while(preIndex>=0 && arr[preIndex]>current){
      arr[preIndex+1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex+1] = current
  }
  return arr
}

const input = [1,9,2,4,8,6,3]

console.log(insertSort(input))