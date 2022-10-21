const log = console.log
function Node(value){
  this.value = value;
  this.next=null
}

function createList(arr){
  const nodes = arr.map(v=> new Node(v))
  nodes.reduce((a,c)=>{
    a.next = c
    return c
  })
  return nodes[0]
}

const link1 =createList([1,2,3])  
function solution(linkList){
  let preP = null, curP = linkList
  let nextP = linkList.next
  if(!nextP) return linkList
  while(nextP){
    curP.next = preP
    preP = curP
    curP =nextP
    nextP= nextP.next
  }
  curP.next = preP
  return curP
}

log(solution(link1))
