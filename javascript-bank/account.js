/* exported Account */
function Account(number, holder) {
  // eslint-disable-next-line no-unused-expressions
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.accountTransactions = function () {
  return `Account number: ${this.number} Account holder: ${this.holder} and Transactions: ${this.transactions}`;
};

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    const newTransactions = new Transaction('deposit', amount);
    this.transactions.push(newTransactions);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    const newTransactions = new Transaction('withdrawal', amount);
    this.transactions.push(newTransactions);
    return true;
  }
  return false;

};

Account.prototype.getBalance = function () {
  let balance = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    } else {
      return 0;
    }
  } return balance;
};
