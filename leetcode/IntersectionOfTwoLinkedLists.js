
var getIntersectionNode = function(headA, headB) {
    const pa = headA, pb = headB;
    let aLen = 0, bLen = 0
    while(pa!==null){
      pa = pa.next;
      aLen++
    }
    while(pb!==null){
      pb = pb.next;
      bLen++
    }
    let diff = Math.abs(aLen - bLen)
      while(diff){
        if(aLen>bLen){
          headA = headA.next
        }else{
          headB = headB.next
        }
        diff--
      }
    while(headA !== headB){
      headA = headA.next
      headB = headB.next
    }
    return headA
};