 function Node(value){
  this.value = value
  this.next = null
 }

 function Num(arr){
  const a =  arr.map(n=>new Node(n))
  a.forEach((node,index,arr)=>node.next = arr[index+1])
  return a[0]
 }

 const head1 =  Num([2,4,3])
 const head2 =  Num([5,6,4])

function solution(head1, head2){
  console.log(head1)
  console.log(head2)

  const getNum = (num) =>{
    let i=[num.value]
    while(num.next){
      num = num.next;
      i.unshift(num.value)
    }
    return Number(i.join('')) 
  }
  const result = getNum(head1) + getNum(head2) 
  const r=  String(result).split('').map(n=>({
    value:Number(n),
    next:null
  })) 
  r.reverse().forEach((n,i,arr)=>{n.next = arr[i+1]} )
 return r[0]
}

console.log(solution(head1,head2)) 