function checkEvenNumber(num){
    return new Promise((resolve, reject) => {
        if(num%2 === 0){
            resolve("The number is even");
        } else {
            reject("The number is odd or invalid");
        }
    })
}

checkEvenNumber(4).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});

checkEvenNumber(5).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
