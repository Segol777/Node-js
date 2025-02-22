import { generateFibonacci, generatePrimeNumbers } from './sequenceUtils';

const fibonacciLimit = 100;
console.log(`Последовательность Фибоначчи до ${fibonacciLimit}:`, generateFibonacci(fibonacciLimit));

const primeLimit = 50;
console.log(`Простые числа до ${primeLimit}:`, generatePrimeNumbers(primeLimit));
