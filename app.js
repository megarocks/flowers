const readline = require('readline')

const BouqueteSpec = require('./BouqueteSpec')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const bouqueteSpecs = []
let rulesDelimiterReceived = false
rl.on('line', (line) => {
  if (line.length === 0) {
    rulesDelimiterReceived = true
    return
  }

  if (!rulesDelimiterReceived) {
    bouqueteSpecs.push(new BouqueteSpec(line))
  } else {
    // process flower
  }
})