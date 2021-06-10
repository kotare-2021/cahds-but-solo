const express = require('express')
const hbs = require('express-handlebars')
const { isNull } = require('util')
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

server.post('/', (req, res) => {
  let question
  let hand
  console.log('hi')
  db.questionList()
    .then(list => {
      
    })
  var gameData = {
    questions : db.questionList(),
    round : 1,
    playerHand : db.playerHand(),
  }
  console.log(gameData)
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


module.exports = server