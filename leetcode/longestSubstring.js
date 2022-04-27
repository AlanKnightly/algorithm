const log = console.log

const findLongestSubString = (s)=>{
  // start and end point index
  let i = j = 0, maxLen = 0;
  while(j<=s.length-1){
    // check if new char is repeat one & return the index of repeat char
    const newChar = s[j]
    const repeatCharIndex = s.slice(i,j).indexOf(newChar)
    if(repeatCharIndex > -1){
      // update i inex
      i = i+repeatCharIndex+1
    }
    maxLen = Math.max(maxLen, j-i+1)
    j++;
  }
  return maxLen
}

const s = "aljsndlaknsdkll"

log(findLongestSubString(s)) 