const User = require('../models/user')
const errortype = require('../helpers/erros')

async function login(email, password){

    try{
        const curr_login = await User.findOne({email:email});

        if(curr_login){
            const authenticated = await User.findOne({email:email, password:password});

            if(authenticated){
                console.log(`${email} has logged in.`);
                // TODO
                // logged in stuff 
            }
        } else{
            throw new errortype.ErrorNotRegistered(`${email} not registered.`);
        }
    }catch(err){
        if(err.id == -502){
            console.log(err.message)
        }
    }


}

module.exports = login