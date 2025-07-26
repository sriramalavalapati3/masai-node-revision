class createBankAccount {
     constructor(amount){
        this.balence = amount || 0;
     }

     deposit(amount){
        if(typeof amount !== 'number' || amount <= 0) {
            console.error('Invalid deposit amount');
            return;
        }
        this.balence += amount;
        return this.balence;
     }

       withdraw(amount){
    if(typeof amount !== 'number' || amount <= 0) {
        console.error('Invalid withdrawal amount');
        return;
    }
    if(amount > this.balence) { // <-- use this.balence
        console.error('Insufficient funds');
        return;
    }
    this.balence -= amount;
    return this.balence;
}

        getBalence() {
            return this.balence;
        }
}

const myAccount = new createBankAccount(1000);
console.log(myAccount.deposit(500)); // 1500
console.log(myAccount.withdraw(200)); // 1300
console.log(myAccount.getBalence()); // 1300
console.log(myAccount.withdraw(1500)); // Error: Insufficient funds
console.log(myAccount.deposit(-100)); // Error: Invalid deposit amount
console.log(myAccount.withdraw('abc')); // Error: Invalid withdrawal amount
console.log(myAccount.getBalence()); // 1300