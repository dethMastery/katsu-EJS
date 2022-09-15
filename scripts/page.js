let mainDB = require('../db/main.json')
let homeAPI = JSON.stringify(mainDB[0])
let axios = require('axios')

module.exports = async function (app, cors, config) {

  function home() {
    let ax = axios.get('https://frame.kitzu.me/rdm/48643')
    let axCall = ax.then((rsp => rsp.data.resp))

    return axCall
  }

  // Homepage
  app.get('/', (req, res) => {
    home().then(data => {
      res.render('index', {
        site: config,
        api: homeAPI,
        pBG: data
      })
    })
  })

  // API Page
  app.get('/api', cors(config.freeOrigin), (req, res) => {
    res.json(mainDB)
  })
}