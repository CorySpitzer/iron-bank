var BankAccount = function(holderName, balance) {
  this.holderName = holderName;
  this.balance = balance;
};

BankAccount.prototype.deposit = function(amount) {
  return this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount) {
  return this.balance -= amount;
};
