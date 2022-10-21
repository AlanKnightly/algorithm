

const s1 = 'flow'
const s2 = 'flower'
const s3 = 'fleet'

const solution = (...strs)=>{
  let index = 0, common =''
  const checkChar = ()=> strs.map(str=>str[index]).every((s,i,arr)=>s===arr[0])
  while(1){
     if(checkChar(index)){
        common = common+strs[0][index]
        index++
     }else{
      break
     }
  }
  return common
}



console.log(solution(s1,s2,s3))