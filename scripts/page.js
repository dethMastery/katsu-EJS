let mainDB = require('../db/main.json')
let uConfig = require('./userConfig')

module.exports = function (app, cors, config) {

  app.get('/', (req, res) => {
    res.render('index', {
      site: uConfig
    })
  })

  app.get('/api', cors(config.freeOrigin), (req, res) => {
    res.json(mainDB)
  })

}