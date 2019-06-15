const mongoose = require('mongoose')

const mongoDB = 'mongodb://localhost:27017/ihc'
mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('error', () => {
    throw new Error('MongoDB connection error')
})