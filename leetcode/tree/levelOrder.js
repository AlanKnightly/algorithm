// Deep First or Board First Search
var levelOrder = function(root) {
  const queue = [] , result = []
  if(root){
    queue.push(root)
  }
  while (queue.length){
    const level = [] , levelLen =  queue.length
    for(let i = 0; i < levelLen;i++){
      const node = queue.shift()
      level.push(node.val)
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    result.push(level)
  }
  return result
};