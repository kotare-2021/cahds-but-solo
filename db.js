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
      return cards
    })
    .catch(err => {
    })
}

const playerHand = (db = connection) => {
  for(i=0; i<5; i++){
  return db('answersCards').select()
    .where('id', Math.floor(Math.random()*15 + 1))
    .update({ player_id: 1 })
  }
}

const getHand = (db = connection) => {
  return db('answersCards').select()
  .where('player_id', 1)
}

const chooseAnswer = (id, db=connection) => {
  return db('answersCards').select()
    .where('id', id)
    .update({ chosen: true })
}

const unChoose = (id, db=connection) => {
  return db('answersCards').select()
    .where('id', id)
    .update({ chosen:false })
}


const currentQ = (round, db = connection) => {
  return db('questionCards').select().first()
  .where('id', round)
}


module.exports = {
  testFunc,
  getAnswerCardById,
  questionList,
  playerHand,
  currentQ,
  getHand,
  chooseAnswer,
  unChoose
}
