const myNew = (constructor, ...params)=>{
  const obj = Object.create(constructor.prototype)
  const result = constructor.apply(obj, ...params)
  return result === obj ? obj : result
}