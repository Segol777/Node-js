import { Finance } from './finance';

// Пример данных для кредита
const principal = 100000; // Сумма кредита
const annualRate = 5;     // Годовая процентная ставка в %
const years = 10;         // Срок кредита в годах

// Расчет ежемесячного платежа
const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(principal, annualRate, years);
console.log(`Ежемесячный платеж по кредиту: ${monthlyPayment.toFixed(2)} $`);

// Пример данных для налога
const income = 70000;     // Доход
const taxRate = 13;       // Ставка налога на доход в %

const incomeTax = Finance.TaxCalculator.calculateIncomeTax(income, taxRate);
console.log(`Налог на доход: ${incomeTax.toFixed(2)} $`);