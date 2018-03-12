const readline = require('readline')
const EventEmitter = require('events')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line) => {
  console.log(line)
})