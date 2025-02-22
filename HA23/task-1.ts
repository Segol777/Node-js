
function firstAsyncTask(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Задача 1 завершена"), 1000));
}

function secondAsyncTask(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Задача 2 завершена"), 2000));
}

function thirdAsyncTask(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Задача 3 завершена"), 500));
}


async function processTasksSequentially() {
    const result1 = await firstAsyncTask();
    console.log(result1);

    const result2 = await secondAsyncTask();
    console.log(result2);

    const result3 = await thirdAsyncTask();
    console.log(result3);
}


processTasksSequentially();
