let exp = require('express')
let cors = require('cors')

let config = require('./scripts/config')
let port = require('./scripts/port')
let page = require('./scripts/page')

let app = exp()
app.set('view engine', 'ejs')

page(app, cors, config)

app.listen(config.port, port(config.port))