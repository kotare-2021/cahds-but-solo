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
  res.render('startPage')
})

server.post('/', (req, res) => {
  db.
})

// server.post('/', (req, res) => {
//   let gameData = {}
//   gameData.round = 1
//   db.currentQ(gameData.round)
//     .then(res => {
//       console.log(res)
//       gameData.question = res
//       return gameData
//     })
//     .then(gameData => {
//       db.playerHand()
//       .then(resp => {
//         console.log(resp)
//         return resp
//       })
//     })
//     .then(gameData => {
//       db.getHand()
//       .then(resp => {
//         gameData.playerHand = resp
//         console.log(resp)
//         return resp
//       })
//       return gameData
//     })
//     .then(gameData => {
//       console.log(gameData)
//       res.render('home', gameData)
//   })
// })

// server.get('/', (req, res) => {
//   res.render('home', {cards: [{answer: 'hi'}, {answer: 'hi'}, {answer: 'hi'}, {answer: 'hi'}, {answer: 'hi'}]})
// })

// server.post('/game/:id', (req, res) => {
//   db.playCard(id)
// })

// server.get('/test', (req, res) => {
//   let card
//   db.getAnswerCardById(2)
//   .then(card => {
//     console.log(card)
//     res.render('test', card)
//   })
// })

// server.get('/home', (req, res) => {
//   res.render('startPage')
// })


server.get('/round1', (req, res) => {
  res.render('round1', {chosen: true})
})

module.exports = server