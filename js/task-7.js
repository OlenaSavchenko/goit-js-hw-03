const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  generateId() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  },

  createTransaction(amount, type) {
    const id = this.generateId();
    return { amount, type, id };
  },

  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
  },

  withdraw(amount) {
    amount > this.balance
      ? console.log(
          `Снятие ${amount} невозможно, недостаточно средств на счету`,
        )
      : this.transactions.push(
          this.createTransaction(amount, Transaction.WITHDRAW),
        );
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    let getTransaction;

    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        getTransaction = transaction;
      }
    }
    return getTransaction;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
