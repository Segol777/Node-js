function asyncToUpperCase(str: string): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve(str.toUpperCase()), 1000));
}


async function processArrayStrings(strings: string[]) {
    const promises = strings.map(str => asyncToUpperCase(str));
    const results = await Promise.all(promises);
    console.log("Результаты:", results);
}


const stringsArray = ["hello", "world", "async", "await"];
processArrayStrings(stringsArray);
