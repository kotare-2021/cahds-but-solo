const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  testFunc,
  getAnswerCardById,
  getPlayerHand
}

const testFunc = () => {
  return null
}

const getAnswerCardById = (id, db = connection) => {
  return db('answerCards').select()
    .where('id', id)
    .then(resp => {
      return resp
    })
    .catch(err => {
      console.log('Database error: ' + err.message)
    })
}

const getPlayerHand = (db = connection) => {
  return db('answerCards').select()
    .where('player_id', 1)
    .then(resp => {
      return resp
    })
    .catch(err => {
      console.log('Database error: ' + err.message)
    })
}

