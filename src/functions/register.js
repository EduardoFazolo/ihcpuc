const User = require('../models/user')
const errortype = require('../helpers/erros')

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(re) != null
}

async function register_newUser(name, email, password){


    try{
        if(!validateEmail(email)){
            throw new errortype.ErrorInvalidEmail("Email invalido");
        }

        let newUser = new User({
            name:name,
            email:email,
            password:password
        });

        await newUser.save()

    }
    catch(err){
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                console.log(`${email} already registered.`);
            }else{
                console.error(err.message);
            }

        }
        
    }
}

module.exports = register_newUser