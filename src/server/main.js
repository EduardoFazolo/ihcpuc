const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const mongoDB = 'mongodb://localhost:27017/ihc'
mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('error', () => {
    throw new Error('MongoDB connection error')
})

const porta = 8080
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('client/build'))
module.exports = {
    app
}

// Endpoints
require('./auth')
require('./post')
require('./search')

// app.get('*', (request, response) => {
//     response.sendFile(process.cwd() + '/client/build/index.html')
// })

app.listen(porta, () => {
    console.log('Servidor rodando na porta ' + porta)
})

