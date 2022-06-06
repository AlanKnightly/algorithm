/**
 * 实现instanceof
 */
// const myInstanceOf = (target, Constructor)=>{
//   let targetPrototype = Object.getPrototypeOf(target)
//   let constructorPrototype =Constructor.prototype

//   while(targetPrototype){
//     if(targetPrototype === constructorPrototype) return true
//     targetPrototype = Object.getPrototypeOf(targetPrototype)
//   }
//   return false
// }

const myInstanceOf = (obj,p) => {
  let objPrototype = Object.getPrototypeOf(obj)
  const proto = p.prototype
  while(objPrototype){
    if(objPrototype === proto) return true
    objPrototype =  Object.getPrototypeOf(objPrototype)
  }
  return false
}

console.log(myInstanceOf([], Array)) 
// console.log(Array.prototype ===  Object.getPrototypeOf(Array)) 


