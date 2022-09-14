let exp = require('express')
let cors = require('cors')
let path = require('path')
let nib = require('nib')
let stylus = require('express-stylus')
let expLayout = require('express-ejs-layouts')

let config = require('./scripts/config')
let port = require('./scripts/port')
let page = require('./scripts/page')

let app = exp()

// Stylus Setting up
app.use(stylus({
  src: path.join(__dirname + '/static/css'),
  use: [nib()],
  import: ['nib']
}))
app.use(exp.static(path.join(__dirname + '/static/css')))

// EJS Layout
app.use(expLayout)

// Setting up view Engine & layout
app.set('view engine', 'ejs')
app.set('layout', ('layout'))

page(app, cors, config)

app.listen(config.port, port(config.port))