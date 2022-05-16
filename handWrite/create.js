const create = (p)=>{
  function EmptyConstruct(){
  }
  EmptyConstruct.prototype= p
  return new EmptyConstruct()
}