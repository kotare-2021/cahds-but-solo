const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Middleware

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
// Routes

server.get('/', (req, res) => {
  res.render('home')
})




module.exports = server