function successfulTask(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Успешная задача"), 1000));
}

function failedTask(): Promise<string> {
    return new Promise((_, reject) => setTimeout(() => reject("Ошибка в задаче"), 1500));
}

async function runParallelTasksWithErrorHandling() {
    try {
        const results = await Promise.all([successfulTask(), failedTask(), successfulTask()]);
        console.log("Результаты:", results);
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
}

runParallelTasksWithErrorHandling();
