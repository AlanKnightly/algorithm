
const LCA = (root,p,q)=>{
  if([null, p,q].includes(root)) return root
  
  const left = LCA(root.left,p,q)
  const right = LCA(root.right,p,q)

  if(left === null) return right
  if(right === null) return left
  if(left && right) return root
  return null
}