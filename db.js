const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const testFunc = () => {
  return null
}

const getAnswerCardById = (id, db = connection) => {
  return db('answersCards').select().first()
    .where('id', id)
    .then(resp => {
      return resp
    })
    .catch(err => {
      console.log('Database error: ' + err.message)
    })
}

const questionList = (db = connection) => {
  return db('questionCards').select()
    .then(cards => {
      // console.log(cards)
      return cards
    })
    .catch(err => {
    })
}

const playerHand = (db = connection) => {
  for(i=0; i<5; i++){
  return db('answersCards').select()
    .where('id', Math.floor(Math.random()*15 + 1) && !500)
    .update({ player_id: 1 })
    .then(res => {
      console.log(res)
      return res
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}

const getHand = (db = connection) => {
  return db('answersCards').select()
  .where('player_id', 1)
  .then(res => {
    console.log(res)
    return res
  })
  .catch(err => {
    console.log(err.message)
  })
}

const compileGameData = (db = connection) => {
  
}

const currentQ = (round, db = connection) => {
  return db('questionCards').select().first()
    .where('id', round)
    .then(resp => {
      return resp
    })
    .catch(err => {
      console.log('database error: '+err.message)
    })
}

module.exports = {
  testFunc,
  getAnswerCardById,
  questionList,
  playerHand,
  currentQ,
  getHand
}
