const mongoose = require('mongoose')
const User = require('../models/user')

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(re) != null
}

async function register_newUser(name, email, password){


    try{
        if(!validateEmail(email)){
            throw new Error("Email invalido");
        }

        let newUser = new User({
            name:name,
            email:email,
            password:password
        });
        

        const pr = new Promise((res) =>{
            newUser.save(err => {
                if (err) {
                    if (err.name === 'MongoError' && err.code === 11000) {
                    // Duplicate username
                    console.log(`${email} already registered.`);
                    //return res.status(500).send({ succes: false, message: 'User already exist!' });
                    }
        
                }else {
                    console.log('New user registered:')
                    console.log(newUser)
                }
                res(err)
            });
        })

        return pr;
    }
    catch(err){
        console.error(err);
    }
}

module.exports = register_newUser