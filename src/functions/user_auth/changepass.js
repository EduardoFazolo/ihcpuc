const User = require('../../models/user')
const errortype = require('../../helpers/erros')

async function change_password(email, old_password, new_password, confirm_password){
    
    try{
        if(new_password !== confirm_password){
            throw new errortype.InvalidPassConfirmation("Confirmacao de senha invalida");
        }
        const user_auth = {
            email:email,
            password:old_password
        }

        const user = await User.findOne(user_auth);

        if(user == null){
            throw new errortype.ErrorNotRegistered("Usuário ou senha inválida");
        }

        user.password = new_password;
        await user.save()
        console.log(user);


    }catch(err){
        console.log(err)
    }
    

}

module.exports.change_password = change_password;