const moment = require('moment');
const currentDate = moment();

console.log('Формат DD-MM-YYYY:', currentDate.format('DD-MM-YYYY'));
console.log('Формат MMM Do YY:', currentDate.format('MMM Do YY'));
console.log('День недели (dddd):', currentDate.format('dddd'));