class Transaction {
  constructor(amount) {
    this.amount  = amount;
  }
}
class Withdrawal extends Transaction {
  
  // Update the balance in the account
  get value () {
    return this.amount * -1;
  }
  get type () {
    return "Withdrawal";
  }
}

class Deposit extends Transaction {

  // Update the balance in the account
  get value () {
    return this.amount;
  }

  get type () {
    return "Desposit";
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
    switch (p_transaction.type) {
      case "Deposit":
        this.balance += p_transaction.value;
        this.transactionHistory.push({ type: p_transaction.type, amount: p_transaction.value, status: "OK"});
        break;
      case "Withdrawal":
        if (this.balance <= p_transaction.value) {
          this.balance += p_transaction.value;
          this.transactionHistory.push({ type: p_transaction.type, amount: p_transaction.value, status: "OK"});
        } else {
          this.transactionHistory.push({ type: p_transaction.type, amount: p_transaction.value, status: "Declined"});
        }
        break;
      default:
        console.log("Invalid transaction type.");
    }
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");
console.log("Initial balance of my account: ", myAccount.balance);
t1 = new Withdrawal(50.25, myAccount);

myAccount.commitTransaction(t1);
console.log(myAccount.transactionHistory);
console.log("Balance is ", myAccount.balance);

