const User = require('../../models/user')

async function logoff(_email){

    const curr_login = await User.findOne({email:_email}).exec()

    console.log(`${_email} has logged off.`);

    curr_login.logged = false;
    await curr_login.save();

}

module.exports.logoff = logoff