// 前中后序
const traversal = (root) =>{
 if(root){
   console.log(root.val)
   if(root.left) traversal(root.left)
   if(root.right) traversal(root.right)
 }
 return null
}


//层次

const traversalLevel = (root) =>{
  if(root){
    const levelQueue = [root]
    while(levelQueue.length){
      const len = levelQueue.length
      for(let i = 0;i<len;i++){
        const node = levelQueue.shift()
        console.log(node.val)
        if(node.left){
          levelQueue.push(node.left)
        }
        if(node.right){
          levelQueue.push(node.right)
        }
      }
    }
  }
  return null
 }







function Node(val){
  this.val = val
  this.left = null
  this.right = null
}



const SIZE=10
let index = 1
const n1 = new Node(index++)
const buildTree = (node)=>{
  if(index>=SIZE) return
  node.left = new Node(index++)
  buildTree(node.left)
  node.right = new Node(index++)
  buildTree(node.right)
}
buildTree(n1)

// console.log(n1)

// traversal(n1)
traversalLevel(n1)