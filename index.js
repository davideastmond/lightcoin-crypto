class Transaction {
  constructor(amount) {
    this.amount  = amount;
    this.transactionHistory = [];
    
  }
}
class Withdrawal extends Transaction {
  
  // Update the balance in the account
  get value () {
    return this.amount * -1;
  }
  
}

class Deposit extends Transaction {

  // Update the balance in the account
  get value () {
    return this.amount;
  }

}

class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
    this.transactionHistory = [];
  }

  commitTransaction(p_transaction) {

  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");
console.log("Initial balance of my account: ", myAccount.balance);
t1 = new Withdrawal(50.25, myAccount);
console.log(typeof t1);
console.log('Transaction 1:', t1.value);

t2 = new Withdrawal(9.99, myAccount);

console.log('Transaction 2:', t2.value);

t3 = new Deposit(120.00, myAccount);

console.log('Transaction 3:', t3.value);
console.log('Balance:', myAccount.balance);
