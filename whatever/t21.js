function Node(value){
  this.value = value
  this.next = null
}

function createLinkList(arr){
  const nodes = arr.map(n=>new Node(n))
  nodes.forEach((node,i,arr)=>{node.next=arr[i+1]})
  return nodes[0]
}

const link1 = createLinkList([1,2,4])
const link2 = createLinkList([1,3,4])

function solution(link1, link2){
  let p1= p = link1.value < link2.value?link1:link2

  while(link1&&link1.value && link2&&link2.value){
    if(link1?.value>=link2?.value){
      p.next = link1
      link1 = link1.next
    }else{
      p.next = link2
      link2 = link2.next
    }
    p=p.next
  }
  return p1
}

console.log(JSON.stringify(solution(link1, link2 )) )




