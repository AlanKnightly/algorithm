
const tool =  require('./tool/index') 
const {createNode, parseNode, log } = tool

var reverseList = function(head) {
  let pre = null
  while(head){
     let next = head.next
     head.next = pre
     pre = head
     head = next
  }
  log(pre)
  return pre
};

const list = createNode([1,2,3,4,5])

reverseList(list[0])