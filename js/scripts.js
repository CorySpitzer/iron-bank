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
    var initialDeposit = parseFloat($('input#initial-deposit').val()).toFixed(2);
    var account = new BankAccount(holderName, initialDeposit);
    $('.displayed-balance').html(
      '<h1>' + "$" +
        '<span id="recent-balance">' + initialDeposit + '</span>' +
      '</h1>');
  });

  $('#alter-account').submit(function(event) {
debugger;
    event.preventDefault();
    var oldBalance = parseFloat($('#recent-balance').text());
    var depositAmount = parseFloat($('input#account-deposit').val()).toFixed(2);
    var withdrawalAmount = parseFloat($('input#account-withdrawal').val()).toFixed(2);
    $('.displayed-balance').text(oldBalance + (depositAmount - withdrawalAmount));
  });
});
