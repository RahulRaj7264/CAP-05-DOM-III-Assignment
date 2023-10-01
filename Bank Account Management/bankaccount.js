 
 const bankAccount = {
    accountNumber: "1234567890",
    balance: 2000,

    
    deposit: function (amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance is $${this.balance}.`;
        } else {
            return "Invalid amount. Please enter a positive number.";
        }
    },

   
    withdraw: function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrawn $${amount}. New balance is $${this.balance}.`;
        } else if (amount <= 0) {
            return "Invalid amount. Please enter a positive number.";
        } else {
            return "Insufficient funds. Transaction canceled.";
        }
    },

   
    checkBalance: function () {
        return `Account balance is $${this.balance}.`;
    },
};


console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(200)); 
console.log(bankAccount.checkBalance()); 