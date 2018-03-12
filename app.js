const readline = require('readline')

const BouqueteSpec = require('./BouqueteSpec')

const rl = readline.createInterface({
  input: process.stdin
})

const bouqueteSpecs = []
let rulesDelimiterReceived = false
rl.on('line', (line) => {
  if (line.length === 0) {
    rulesDelimiterReceived = true
    return
  }

  if (!rulesDelimiterReceived) {
    const bouqueteSpec = new BouqueteSpec(line)
    bouqueteSpec.on('bouqueteComplete', sendBouquete)
    bouqueteSpecs.push(bouqueteSpec)
  } else {
    checkIsFacilityStorageReadyToProccessFlower(bouqueteSpecs)
    bouqueteSpecs.some(bouquete => bouquete.pickUpFlower(line))
  }
})

function sendBouquete(bouqueteDescription) {
  process.stdout.write(bouqueteDescription + '\n')
}

function checkIsFacilityStorageReadyToProccessFlower(bouquets) {
  const flowersInAllBouquets = bouquets.reduce((acc, bouquete) => acc + bouquete.getFlowersQtyAtBouquete(), 0)
  if (flowersInAllBouquets > 256) {
    process.exit(1)
  }
}