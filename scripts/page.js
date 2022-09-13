let mainDB = require('../db/main.json')

module.exports = function (app) {

  app.get('/', (req, res) => {
    res.send('a')
  })

  app.get('/api', (req, res) => {
    res.json(mainDB)
  })

}