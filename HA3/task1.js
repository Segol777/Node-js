const fs = require('fs');
fs.mkdir('myFolder', (err) => {
    if (err) {
        console.error('Ошибка при создании каталога:', err);
    } else {
        console.log('Каталог myFolder успешно создан');
    }
});


fs.rmdir('myFolder', (err) => {
    if (err) {
        console.error('Ошибка при удалении каталога:', err);
    } else {
        console.log('Каталог myFolder успешно удален');
    }
});