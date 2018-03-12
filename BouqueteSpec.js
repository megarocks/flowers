const EventEmitter = require('events')

class BouqueteSpec extends EventEmitter {
  constructor(specString) {
    super(specString)

    this.originalSpec = specString
    const parsedSpec = specString.match(/^([A-Z])([LS])((?:\d+[a-z])+)(\d+)$/)
    this.type = parsedSpec[1]
    this.size = parsedSpec[2]
    this.requiredFlowersString = parsedSpec[3]
    this.totalQty = Number(parsedSpec[4])

    this.startNewBouquete()
  }

  getDataOfFlowersRequiredToCompleteBouquete() {
    const species = this.requiredFlowersString.split(/\d+/).filter(s => s.length > 0)
    const quantities = this.requiredFlowersString.split(/[a-z]/).filter(s => s.length > 0).map(Number)
    const flowersRequiredToCompleteBouquete = species.reduce((acc, val, idx) => {
      acc[val] = quantities[idx]
      return acc
    }, {})
    const anyFlowersQty = this.totalQty - quantities.reduce((acc, val) => acc + val, 0)
    if (anyFlowersQty > 0) {
      flowersRequiredToCompleteBouquete.any = anyFlowersQty
    } else {
      flowersRequiredToCompleteBouquete.any = 0
    }
    return flowersRequiredToCompleteBouquete
  }

  startNewBouquete() {
    this.flowersRequiredToCompleteBouquete = this.getDataOfFlowersRequiredToCompleteBouquete()
    this.flowersAlreadyInBouquete = {}
  }
}

module.exports = BouqueteSpec