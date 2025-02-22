export function generateFibonacci(limit: number): number[] {
    const sequence = [0, 1];
    while (true) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next > limit) break;
        sequence.push(next);
    }
    return sequence;
}


export function generatePrimeNumbers(limit: number): number[] {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
}
