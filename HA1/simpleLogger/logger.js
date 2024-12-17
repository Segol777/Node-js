const fs = require('fs')
const logMessage = (message) => {
const log = `${message}\n`
  fs.appendFile('logi.txt', log, (error) => {
    if (error) {
      console.error('Запись не  удалась', error);
    }
  })
}

module.exports = logMessage