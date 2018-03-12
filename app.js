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
    const bouqueteSpec = new BouqueteSpec(line)
    bouqueteSpec.on('bouqueteComplete', sendBouquete)
    bouqueteSpecs.push(bouqueteSpec)
  } else {
    checkIsFacilityStorageReadyToProccessFlower(bouqueteSpecs)
    bouqueteSpecs.some(bouquete => bouquete.pickUpFlower(line))
  }
})

function sendBouquete(bouqueteDescription) {
  rl.write(bouqueteDescription + '\n')
}

function checkIsFacilityStorageReadyToProccessFlower(bouquetes) {
  const flowersInAllBouquetes = bouquetes.reduce((acc, bouquete) => acc + bouquete.getFlowersQtyAtBouquete(), 0)
  if (flowersInAllBouquetes > 256) {
    process.exit(1)
  }
}