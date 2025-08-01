function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task A completed");
      resolve("Task A completed");
    }, 1000); // 1 second
  });
}


function processTask(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = `Task B processed: ${input}`;
      console.log(result);
      resolve(result);
    }, 1500);
  });
}


function finalizeTask(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = `Final result: ${input}`;
      console.log(result);
      resolve(result);
    }, 500);
  });
}


startTask()
  .then(resultA => processTask(resultA))
  .then(resultB => finalizeTask(resultB))
  .catch(error => {
    console.error("An error occurred:", error);
  });
