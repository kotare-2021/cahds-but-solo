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
      console.log(cards)
      return cards
    })
    .catch(err => {

    })
}

const playerHand = (db = connection) => {
  return db('answersCards').select()
    .where('id', Math.floor(Math.random()*15 + 1) && !500)
    .update({ player_id: 1 })
    .then(() => {
      return db('answersCards').select()
        .where('player_id', 1)
        .then(cards => {
          return cards
        })
        .catch(err => {
          console.log(err.message)
        })
    })
}

module.exports = {
  testFunc,
  getAnswerCardById,
  questionList,
  playerHand
}
