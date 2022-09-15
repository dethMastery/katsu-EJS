let mainDB = require('../db/main.json')
let homeAPI = JSON.stringify(mainDB[0])

module.exports = function (app, cors, config) {
  
  // 404 Page
  app.use(function(req, res, next) {
    res.status(404).render('errors/error', {
      site: config,
      errorID: 404,
      api: homeAPI
    })
  })
}