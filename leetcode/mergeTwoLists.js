const log = console.log
var mergeTwoLists = function(list1, list2) {
  const getNums = (pointer)=>{
      let num = []
      while(pointer){
          num.push(pointer.val)
          pointer = pointer.next
      }
      return num
  }
  const arr1 = getNums(list1)
  const arr2 = getNums(list2)
  let i=0, j=0, result = []
  const len = Math.max(arr1.length, arr2.length)
  while(typeof arr1[i] === 'number'|| typeof arr2[j] === 'number'){
    if(typeof arr1[i] === 'number' && typeof arr2[j] === 'number'){
      if(arr1[i]<=arr2[j]){
        result.push(arr1[i])
        i++
      }else{
        result.push(arr2[j])
        j++
      } 
    }else if(typeof arr1[i] === 'number'){
      result.push(arr1[i])
      i++
    }else{
      result.push(arr2[j])
      j++
    }
  }

  const resultNodes = result.map(n=>({
      val:n,
      next:null
  }))
  resultNodes.forEach((node,i,arr)=>{
      node.next = arr[i+1] || null
  })
 return resultNodes[0] || null
};


const createNode = (arr) => {
  const nodes =  arr.map(n=>({
    val:n,
    next:null
    }))
  nodes.forEach((node,i,arr)=>{
    node.next = arr[i+1] || null
  })
  return nodes
}
const node1 = createNode([])
const node2 = createNode([0])

 mergeTwoLists(node1[0],node2[0])