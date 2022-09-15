let mainDB = require('../db/main.json')

module.exports = function (app, cors, config) {

  // Homepage
  app.get('/', (req, res) => {
    res.render('index', {
      site: config
    })
  })

  // Blog Page
  app.get('/blog', (req, res) => {
    let link = mainDB[0].tab[0].blog
    res.redirect(link)
  })

  // Artist Page
  app.get('/artist', (req, res) => {
    let link = mainDB[0].tab[0].artist
    res.redirect(link)
  })

  // API Page
  app.get('/api', cors(config.freeOrigin), (req, res) => {
    res.json(mainDB)
  })
}