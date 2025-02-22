function delayTask(duration: number): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve(`Задача с задержкой ${duration} мс завершена`), duration));
}

async function processNumbersWithDynamicDelays(numbers: number[]) {
    const promises = numbers.map(number => delayTask(number));
    const results = await Promise.all(promises);
    console.log("Результаты:", results);
}

const numbersArray = [1000, 2000, 500, 1500];
processNumbersWithDynamicDelays(numbersArray);
