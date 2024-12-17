const emitfunkz = require('events')
const zapisem = new emitfunkz()
const sendMessage = (user, message, zapisem) => {
zapisem.emit('message', user, message)
}
zapisem.on('message', (user, message) => {
  console.log(`${user}: ${message}`);
  
})
sendMessage('Sergej','Привет  Народ !!', zapisem)
sendMessage('Artur', 'Здорова  братишка !!', zapisem)
sendMessage('Anna', 'Здравствуйте ребята', zapisem)