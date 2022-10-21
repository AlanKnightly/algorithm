const input = '12341'

function solution(s){
   let left = right =0, max= 0;
   while(right<s.length){
    const fragmentRepeatPosition = s.slice(left,right+1).indexOf(s[right+1])
    if(fragmentRepeatPosition>-1){
      left = left+fragmentRepeatPosition+1
    }
    max = right-left+1
    right++
   }
   console.log(max)
}
solution(input)