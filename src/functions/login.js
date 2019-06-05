const User = require('../models/user')
const errortype = require('../helpers/erros')

async function login(_email, password){

    const curr_login = await User.findOne({email:_email}).exec()
    console.log(curr_login);
    if(curr_login){
        const authenticated = await User.findOne({"email":_email, password:password}).exec();

        if(authenticated){
            console.log(`${_email} has logged in.`);
            // TODO
            // logged in stuff 
            curr_login.logged = true;
            await curr_login.save();
        }
    } else {
        throw new errortype.ErrorNotRegistered(`${_email} not registered.`);
    }


}

module.exports = login