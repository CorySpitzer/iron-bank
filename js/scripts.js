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

$(document).ready(function() {
  $('form#new-account').submit(function(event) {
    event.preventDefault();
    var holderName = $('input#account-holder-name').val();
    var initialDeposit = parseInt($('input#initial-deposit').val());
    // alert(initialDeposit + ' ' + HolderName);
    account = new BankAccount(holderName, initialDeposit);
    // alert(account.holderName + initialDeposit)
  });

  $('form#alter-account').submit(function(event) {
    event.preventDefault();
    var depositAmount = parseInt($('input#account-deposit').val());
    var withdrawAmount = parseInt($('input#account-withdraw').val());
    alert(depositAmount + ' ' + withdrawAmount);
    var newBalance = account.deposit(depositAmount - withdrawalAmount);
    newBalance = 5;
    alert(newBalance);
  });
});
