

var isValid = function(s) {
//  1. remove match pattern
// while(["()","[]","{}"].some(n=>s.indexOf(n)> -1)){
//   s= s.replace("()","")
//   s= s.replace("[]","")
//   s= s.replace("{}","")
// }
  // 2
  const stack =[]
  const map = {
    '(':')',
    '[':']',
    '{':'}',
  }
  for(let i =0;i<s.length;i++){
    if(s[i] in map){
      stack.push(map[s[i]])
    }else{
      const right = stack.pop()
      if(right !== s[i]) return false
    }
  }
  return stack.length === 0
};

const input = "()"

console.log(isValid(input))