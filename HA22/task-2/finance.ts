export namespace Finance {
    
    export class LoanCalculator {
        static calculateMonthlyPayment(principal: number, annualRate: number, years: number): number {
            const monthlyRate = annualRate / 12 / 100;
            const numberOfPayments = years * 12;
            return (
                (principal * monthlyRate) /
                (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
            );
        }
    }

    export class TaxCalculator {
        static calculateIncomeTax(income: number, taxRate: number): number {
            return income * (taxRate / 100);
        }
    }
}