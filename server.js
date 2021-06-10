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



// 1st stage - setup
 - assign 5 cards the player_id 1
 - grab all question
 - set round to 1


let gameData = {
  round: 1,
  handCards: [
    {id: 1, answer: 'hi', round_id: 1},
    {id: 2, answer: 'hi', round_id: 500},
    {id: 3, answer: 'hi', round_id: 2},
    {id: 4, answer: 'hi', round_id: 500},
    {id: 5, answer: 'hi', round_id: 500}
  ],
  questionCard: [
    {id: 1, questions: 'hi', round_id: 1},
    {id: 2, questions: 'hi', round_id: 500},
    {id: 3, questions: 'hi', round_id: 2},
    {id: 4, questions: 'hi', round_id: 500},
    {id: 5, questions: 'hi', round_id: 500}
  ]

}

server.get('/', (req, res) => {
  res.render('home', {cards: [{answer: 'hi'}, {answer: 'hi'}, {answer: 'hi'}, {answer: 'hi'}, {answer: 'hi'}]})
})

server.post('/game/:id', (req, res) => {
  db.playCard(id)
})

server.get('/test', (req, res) => {
  let card
  db.getAnswerCardById(2)
  .then(card => {
    console.log(card)
    res.render('test', card)
  })
})

server.get('/home', (req, res) => {
  res.render('startPage')
})


module.exports = server