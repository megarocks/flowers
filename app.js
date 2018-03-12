const readline = require('readline')
const EventEmitter = require('events')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const bouqueteRules = []
let rulesDelimiterReceived = false
rl.on('line', (line) => {
  if (line.length === 0) {
    rulesDelimiterReceived = true
    return
  }

  if (!rulesDelimiterReceived) {
    bouqueteRules.push(line)
  } else {
    // process flower
  }
})