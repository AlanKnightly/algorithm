const log = console.log
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
   if(!digits) return []
  const d2lMap = {
     2:['a','b','c'],
     3:['d','e','f'],
     4:['g','h','i'],
     5:['j','k','l'],
     6:['m','n','o'],
     7:['p','q','r','s'],
     8:['t','u','v'],
     9:['w','x','y','z']  
  }
  const combinationsArrays = digits.split('').map(n=>d2lMap[n])
  return combinationsArrays.reduce((a,c)=>{
    const tempArr = []
    a.map(parentChar=>c.map(childChar=> {
      tempArr.push(parentChar+ childChar)
    }))
    return tempArr
  })
};


log(letterCombinations("")) 