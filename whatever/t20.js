const s = "(()){}"

function solution(s){
  const stack = [], 
  left = ['(','[','{'],
  pair = {
    '(':')',
    '[':']',
    '{':'}'
  }
  for(let i=0;i<s.length;i++){
    if(left.includes(s[i])){
      stack.push(pair[s[i]])
    }else {
     const anotherPair =  stack.pop()
      if(typeof anotherPair === 'undefined') return false
    }
  }
  return stack.length ===0
}

console.log(solution(s)) 