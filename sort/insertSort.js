/** 
 * 插入排序：O(n2)
 * 将待排序序列第一个元素作为有序数组，将后面每一个待排序元素
 * 从后向前依次遍历，将待插入元素插入到适当位置
 * */ 

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