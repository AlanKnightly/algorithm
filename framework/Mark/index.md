

const performWorkUntilDeadline = () => {
  if (scheduledHostCallback !== null) {
    const currentTime = getCurrentTime();
    // Keep track of the start time so we can measure how long the main thread
    // has been blocked.
    startTime = currentTime;
    const hasTimeRemaining = true;

    // If a scheduler task throws, exit the current browser task so the
    // error can be observed.
    //
    // Intentionally not using a try-catch, since that makes some debugging
    // techniques harder. Instead, if `scheduledHostCallback` errors, then
    // `hasMoreWork` will remain true, and we'll continue the work loop.
    let hasMoreWork = true;
    try {
      // $FlowFixMe[not-a-function] found when upgrading Flow
      hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
    } finally {
      if (hasMoreWork) {
        // If there's more work, schedule the next message event at the end
        // of the preceding one.
        schedulePerformWorkUntilDeadline();
      } else {
        isMessageLoopRunning = false;
        scheduledHostCallback = null;
      }
    }
  } else {
    isMessageLoopRunning = false;
  }
  // Yielding to the browser will give it a chance to paint, so we can
  // reset this.
  needsPaint = false;
};

// 3. 定时器调用performWorkUntilDeadline
let schedulePerformWorkUntilDeadline = () => {
  localSetImmediate(performWorkUntilDeadline);
}

// 2. 让模块级变量scheduledHostCallback 指向 workLoop ，执行 schedulePerformWorkUntilDeadline
function requestHostCallback(workLoop) {
  scheduledHostCallback = workLoop;
  schedulePerformWorkUntilDeadline();
}

 // 1.任务封装成task塞给队列
export function unstable_scheduleCallback(
  priorityLevel: PriorityLevel,
  callback: Callback,
  options?: {delay: number},
){
  newTask.callback = callback
  if (startTime > currentTime) {
    // This is a delayed task.
    push(timerQueue, newTask);
  } else {
    push(taskQueue, newTask);
    requestHostCallback(workLoop);
  }
  return newTask;
}

function workLoop(hasTimeRemaining: boolean, initialTime: number) {
  let currentTime = initialTime;
  currentTask = peek(taskQueue);
  while (
    currentTask !== null &&
    !(enableSchedulerDebugging && isSchedulerPaused)
  ) {
    if (
      currentTask.expirationTime > currentTime &&
      (!hasTimeRemaining || shouldYieldToHost())
    ) {
      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }
    currentTask.callback()
    pop(taskQueue);
    currentTask = peek(taskQueue);
  }
  return currentTask !== null
}