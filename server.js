const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Middleware

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))

// Routes

server.get('/', (req, res) => {
  res.send('Hi!')
})

module.exports = server