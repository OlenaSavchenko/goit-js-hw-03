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
    return {
      amount: amount,
      type: type,
      id: generateId(),
    };
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
    for (const transaction of this.transactions) {
      if (id === transaction.id) return transaction;
    }
    return `Транзакция под номером ${id} не производилась`;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type);
    }
    return (total += transaction.amount);
  },
};
