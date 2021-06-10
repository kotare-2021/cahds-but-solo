const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  testFunc
}

const testFunc = () => {
  return null
}

const getAnswerCardById = (id, db = connection) => {
  return db('users').select()
    .where('id', id)
    .then(resp => {
      return resp
    })
    .catch(err => {
      console.log(err.message)
    })
}

