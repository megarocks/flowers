const EventEmitter = require('events')

class BouqueteSpec extends EventEmitter {
  constructor(specString) {
    super(specString)

    this.originalSpec = specString
    const parsedSpec = specString.match(/^([A-Z])([LS])((?:\d+[a-z])+)(\d+)$/)
    this.type = parsedSpec[1]
    this.size = parsedSpec[2]
    this.requredFlowersString = parsedSpec[3]
    this.totalFlowers = parsedSpec[4]
  }
}

module.exports = BouqueteSpec