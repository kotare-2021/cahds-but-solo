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

gameData = {}

server.get('/', (req, res) => {
  res.render('startPage')
})

server.get('/play/:id', (req, res) => {
  res.render('home', gameData)
})

server.post('/play/:id', (req, res) => {
  if(gameData.round < 5){
    gameData.round ++
    return db.chooseAnswer(req.params.id)
    .then(res => {
      return db.getHand()
        .then(resp => {
          gameData.hand = resp
          console.log(gameData.round)
          res.render('round1', gameData)
        })
    })
  }else{
    res.redirect('/done')
  }
})

server.post('/', (req, res) => {
  // let gameData = {}
  gameData.round = 1
  return db.getHand()
  .then(resp => {
    gameData.hand = resp
    console.log(resp)
    return db.currentQ(1)
    .then(resp => {
      gameData.question = resp
      console.log(gameData)
      res.render('home', gameData)
    })
  })
})

module.exports = server