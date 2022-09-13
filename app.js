let exp = require('express')

let config = require('./scripts/config')
let port = require('./scripts/port')
let page = require('./scripts/page')

let app = exp()
app.set('view engine', 'ejs')

page(app)

app.listen(config.port, port(config.port))