const requests = [100, 300, 500, 700, 200, 900, 100, 400, 600, 300].map((timer, index) =>
    () => new Promise(resolve => {
      console.log(`start: ${index}-${timer}`);
      setTimeout(() => {
        console.log(`resolved: ${index}-${timer}`)
        resolve({ index, timer });
      }, timer);
    })
);




// function concurrentControl(limit,requests){
//   // 取3个初始任务
//   const initialTasks= requests.slice(0,limit)
//   // 余下任务看作一个队列
//   const taskQueue = requests.slice(limit);
//   // 对每个要执行的任务包装尾逻辑：执行完就取下一个任务
//   const fireTask = (fn)=>{
//      return fn().then(res=>{
//        const nextTask = taskQueue.shift()
//        if(nextTask){
//          fireTask(nextTask)
//        }
//        return res
//      })
//   } 
//   // 开始并发执行limit个任务
//   initialTasks.map(fn=>fireTask(fn))
// }





async function concurrentControl(limit, requests) {
  if(!requests.length) return;
     requests.splice(0, limit).forEach(async request => {
      await request();
      concurrentControl(1, requests)
  })
  }


  concurrentControl(3, requests);