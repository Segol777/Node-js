abstract class Account {
  balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  interestRate: number;

  constructor(initialBalance: number, interestRate: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} into savings account. New balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from savings account. New balance: ${this.balance}`);
    } else {
      console.log('Insufficient funds in savings account.');
    }
  }

  applyInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(`Applied interest: ${interest}. New balance: ${this.balance}`);
  }
}

class CheckingAccount extends Account {
  transactionFee: number; 

  constructor(initialBalance: number, transactionFee: number) {
    super(initialBalance);
    this.transactionFee = transactionFee;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} into checking account. New balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    const totalAmount = amount + this.transactionFee;
    if (totalAmount <= this.balance) {
      this.balance -= totalAmount;
      console.log(`Withdrew ${amount} (including fee ${this.transactionFee}) from checking account. New balance: ${this.balance}`);
    } else {
      console.log('Insufficient funds in checking account.');
    }
  }
}

const savings = new SavingsAccount(2000, 0.05); // 5% годовых
savings.deposit(700);                           // Внесение денег
savings.withdraw(300);                          // Снятие денег
savings.applyInterest();                        // Начисление процентов

const checking = new CheckingAccount(1000, 10);  // Счет с комиссией 10
checking.deposit(300);                           // Внесение денег
checking.withdraw(150);                          // Снятие денег с комиссией
checking.withdraw(1150);                         // Попытка снять больше, чем на счету
