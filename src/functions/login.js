const mongoose = require('mongoose')
const User = require('../models/user')

async function login(email, password){


    const a = await User.findOne({email:email, password:password})


    console.log(a)

}

module.exports = login