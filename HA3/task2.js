const fs = require('fs');
fs.writeFile('info.txt', 'Node.js is awesome!', (err) => {
    if (err) {
        console.error('Ошибка записи !!:', err);
    } else {
        console.log('Текст записан в файл info.txt');
    }
});
fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтении файла:', err);
    } else {
        console.log('Данные  файла info.txt:', data);
    }
});