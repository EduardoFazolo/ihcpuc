const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const mongoDB = 'mongodb://localhost:27017/myapp'
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', () => {
    throw new Error('MongoDB connection error')
})

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Endpoints
require('./auth')
require('./post')
require('./search')

module.exports = {
    app
}
