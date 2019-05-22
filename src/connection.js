const mongoose = require('mongoose')
const register = require('./functions/register');

async function establish_connection(){

    await mongoose.connect('mongodb://localhost/ihc', {useNewUrlParser: true}, ()=> console.log('Connection has been made.'));
    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'connection error:'));

    //await register("Smallneck1", "smallneck1@gmail.com", "1234567")


}

establish_connection()