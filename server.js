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

gameData = {}

server.get('/', (req, res) => {
  console.log('/ gt=et===')
  // db.reset()
  // .then(() => {
    res.render('startPage')
  // })
})


server.post('/play/:id', (req, res) => {
  console.log('post route id', req.params.id)
  if(gameData.round < 5){
    gameData.round ++
    return db.chooseAnswer(req.params.id)
      .then(() => {
        gameData.hand.forEach(e => {
          if(!e.chosen) {
            delete e.chosen
          }
          console.log('hand', e)
                //       return null
              })
              res.render('round1', gameData)
              // res.send('yes')
      })
      .catch(err => {
        console.log('catch')
        res.send(err.message)
      })
  } else {
    console.log('else')
    res.redirect('/done')
  }
})

server.get('/play/:id', (req, res) => {
  console.log('/play/id get')
  res.render('home', gameData)
})

server.post('/', (req, res) => {
  console.log('/ post')
  // let gameData = {}
  gameData.round = 1
  return db.getHand()
  .then(resp => {
    gameData.hand = resp
    // console.log(resp)
    return db.currentQ(1)
    .then(resp => {
      gameData.question = resp
      // console.log(gameData)
      res.render('home', gameData)
    })
  })
})

module.exports = server