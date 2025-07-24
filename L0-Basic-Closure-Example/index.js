function outerFunction(message){
return function innerFunction(){
    console.log(`Hello This is ${message} from the inner function!`);
  }
}

const greet = outerFunction("Closure Example");
greet();