// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

var addTwoNumbers = function(l1, l2) {
  const getNum = (pointer) =>{
      let num = [];
      while(pointer){
          num.unshift(pointer.val)
          pointer=pointer.next
      }
      return num
  }
  const num1 = BigInt(getNum(l1).join(''))
  const num2 = BigInt(getNum(l2).join(''))
  const nodes = String(num1+num2).split('').reverse().map(n=>({
    val:BigInt(n),
    next:null
  }))
  nodes.forEach((n,i,arr)=>{
    n.next = arr[i+1] || null
  })
  return nodes[0]
};

