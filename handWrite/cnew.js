/**
 * || 手写new
 * 1.创建空对象A
 * 2.确定原型
 * 3.调用构造函数
 * 4.判断构造函数的返回是否是引用类型：是引用类型C直接对外返回C，否则根据js行为，返回的是this
 */

const cnew=(constructor,...params)=>{
  const obj = Object.create(constructor.prototype)
  const result = constructor.apply(obj,params)
  if(typeof result === 'object' && result !== null){
    return result
  }else{
    return obj
  }
}

function Person(name){
  this.name = name
}

cnew(Person,'nina')