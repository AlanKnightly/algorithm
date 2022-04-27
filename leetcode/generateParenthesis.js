const log = console.log
var generateParenthesis = function(n) {
  const result = []
  const go = (l,r,s)=>{
    if(l===n &&r===n){
      return result.push(s)
    }
    if(l<n) go(l+1,r,s+'(')
    if(r<l) go(l,r+1,s+')')
  }
  go(0,0,'')
  return result
};

log(generateParenthesis(6))