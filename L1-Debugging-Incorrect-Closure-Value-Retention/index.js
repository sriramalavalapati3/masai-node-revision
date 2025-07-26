function createFunctionList() {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log("Index:", i);
    });
  }

  return functions;
}

console.log("Function List:");
let functionList = createFunctionList();
functionList.forEach(func => func());


// by using let instead of var, each function retains the correct value of i.