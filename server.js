const express = require('express')
const hbs = require('express-handlebars')
const db = require('./db.js')

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

server.get('/test', (req, res) => {
  let card
  db.getAnswerCardById(2)
  .then(card => {
    console.log(card)
    res.render('test', card)
  })
})


server.get('/homeid', (req, res) => {
  res.render('startPage')

})




module.exports = server