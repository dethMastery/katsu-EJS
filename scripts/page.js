let mainDB = require('../db/main.json')

module.exports = function (app, cors, config) {

  app.get('/', (req, res) => {
    res.send('a')
  })

  app.get('/api', cors(config.freeOrigin), (req, res) => {
    res.json(mainDB)
  })

}