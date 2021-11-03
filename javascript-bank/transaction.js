/* exported Transaction */

function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;

}

Transaction.prototype.transaction = function () {
  return `A ${this.type} of ${this.amount}`;
};
