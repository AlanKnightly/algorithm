/**
 * reactive effects：
 * 执行时自动追踪其依赖，被依赖（变量）添加到观察者列表
 * 每次依赖更新，都自动trigger这个effect
 */


var activeEffect = null


const obj = {
  a:1
}
// 全局subsriber对象
const subscriber = new WeakMap()

// 获取target.key的存储effects的Set结构
const getSubscriberObjKey = (target,key)=>{
  let subscriberObj = subscriber.get(target)
  if(!subscriberObj){
    subscriberObj =  new Map()
    subscriber.set(target, subscriberObj)
  }
    let subscriberObjKey = subscriberObj.get(key)
    if(!subscriberObjKey){
      subscriberObjKey = new Set()
      subscriberObj.set(key,subscriberObjKey)
    }
    return subscriberObjKey
}

// 注册effects
const track = (target,key)=>{
    const subscriberObjKey = getSubscriberObjKey(target,key)
    if(activeEffect){
      subscriberObjKey.add(activeEffect)
    }
}
// 触发effects
const trigger = (target,key)=>{
  const subscriberObjKey = getSubscriberObjKey(target,key)
  subscriberObjKey.forEach(effect=>effect())
}

// 注册effect函数
const watchEffect = (effect)=>{
  // 让effect的依赖(用到的响应式变量)能把effect添加到观察者列表中
  // 以后这些依赖(用到的响应式变量)set新值时，能触发这个effect
  function registeredEffect(){
    activeEffect = effect
    effect()
    activeEffect = null
  }
   registeredEffect()
}


/**
 *  Test
 */
// 代理目标对象
const proxyObj = new Proxy(obj, {
  get(target, key){
    track(target,key)
    return target[key]
  },
  set(target,key,value){
    target[key]= value
    trigger(target,key)
  }
})



watchEffect(()=>{
  console.log(proxyObj.a)
})

proxyObj.a = 3
proxyObj.a = 4

