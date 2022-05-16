const myInstanceOf = (target, Constructor)=>{
  let targetPrototype = Object.getPrototypeOf(target)
  let constructorPrototype =Constructor.prototype


  while(targetPrototype){
    if(targetPrototype === constructorPrototype) return true
    targetPrototype = Object.getPrototypeOf(targetPrototype)
  }
  return false
}

// function InstanceOf(left, right) {
//   let proto = left.__proto__;
//   let prototype = right.prototype;
//   for (;;) {
//       if (proto === null) return false;
//       if (proto === prototype) return true;
//       proto = proto.__proto__; // trace way up along the chain
//   }
// }

console.log(myInstanceOf([], Array)) 
// console.log(Array.prototype ===  Object.getPrototypeOf(Array)) 
