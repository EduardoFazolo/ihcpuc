const User = require('../../models/user')
const errortype = require('../../helpers/erros')
const nodemailer = require('nodemailer')
const generator = require('generate-password')

async function reset_password(email){

    try{
        const user = await User.findOne({email:email});
        if (user == null){
            throw new errortype.ErrorNotRegistered("Email não registrado.");
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "trashbin152@gmail.com",
                pass: "ab@ac4t3"
            },
            tls: { rejectUnauthorized: false }
          });

          var new_password = generator.generate({
            length: 10,
            numbers: true
        });

        user.password = new_password;
        await user.save()

          const mailOptions = {
            from: 'trashbin152@gmail.com',
            to: 'trashbin152@gmail.com',
            subject: 'Troca de senha',

            text: `Use a senha: ${new_password} para mudar sua senha através do link: http://localhost:3000/alterarsenha`
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email enviado: ' + info.response);
            }
          });

    }catch(err){
        console.log(err);
    }
    



}

module.exports.reset_password = reset_password;