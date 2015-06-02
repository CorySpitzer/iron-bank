describe('BankAccount', function() {
  it('initializes a new account with holder and balance', function() {
    var account = new BankAccount('Cory', 1000);
    expect(account.holderName).to.equal('Cory');
    expect(account.balance).to.equal(1000);
  });

  it('adds money to balance', function() {
    var account = new BankAccount('Cory', 1000);
    account.deposit(500);
    expect(account.balance).to.equal(1500);
  });

  it('subtracts money from balance', function() {
    var account = new BankAccount('Cory', 1000);
    account.withdraw(600);
    expect(account.balance).to.equal(400);
  });

  it('handles change', function () {
    var account = new BankAccount('Cory', 1000.37);
    expect(account.balance).to.equal(1000.37);
  });

});
