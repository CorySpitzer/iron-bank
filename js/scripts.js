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
    var account = new BankAccount(holderName, initialDeposit);
    $('#displayed-balance').html('<p id="recent-balance">' + initialDeposit + '</p>');
  });

  $('#alter-account').submit(function(event) {
    event.preventDefault();
    var oldBalance = parseInt($('#recent-balance').text());
    var depositAmount = parseInt($('input#account-deposit').val());
    var withdrawalAmount = parseInt($('input#account-withdrawal').val());
    $('#displayed-balance').text(oldBalance + (depositAmount - withdrawalAmount));
  });
});
