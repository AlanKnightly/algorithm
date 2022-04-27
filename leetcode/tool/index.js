
 const createNode = (arr) => {
  const nodes =  arr.map(n=>({
    val:n,
    next:null
    }))
  nodes.forEach((node,i,arr)=>{
    node.next = arr[i+1] || null
  })
  return nodes[0]
}

 const parseNode = (head) => {
  const num = []
  while(head){
    num.push(head.val)  
    head= head.next
  }
  return num
}

const log = console.log


// const createNode2 = (arr) => {
//   const nodes =  arr.reduce((a,currentValue, currentIndex,arr)=>{
//     const node =  {
//       val:currentValue,
//       next:null
//       }
//       // 
//       if(a[currentIndex-1]){
//         a[currentIndex-1].next =node
//       }
//       a.push(node)
//       return a
//   },[])
//   return nodes[0]
// }


// log(createNode2([1,2,3,4]))


module.exports = {
  log,
  createNode,
  parseNode
}
