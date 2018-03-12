const EventEmitter = require('events')

class BouqueteSpec extends EventEmitter {
  constructor(props) {
    super(props)
    console.log('creating BouqueteSpec: ' + props)
  }
}

module.exports = BouqueteSpec