const { app } = require('./main')
const { change_password} = require('../functions/user_auth/changepass')
const { reset_password } = require('../functions/user_auth/resetpass')
const { logoff } = require('../functions/user_auth/logoff')
const { login } = require('../functions/user_auth/login')
const { register_newUser } = require('../functions/user_auth/register')
const User = require('../models/user')

app.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body

        // fazer login
        await login(email, password)
        let user = await User.findOne({email:email}).exec();

        response.send({
            data: {
                name: user.name
            }
        })
    } catch (error) {
        response.send({
            error: JSON.stringify(error)
        })
    }
})

app.post('/logoff', async (request, response) => {
    try {
        const { email } = request.body

        // fazer logoff
        await logoff(email)

        response.send({})
    } catch (error) {
        response.send({
            error: JSON.stringify(error)
        })
    }
})

app.post('/subscribe', async (request, response) => {
    try {
        const { name, lastName, email, password } = request.body

        // fazer subscribe
        await register_newUser(name, lastName, email, password)

        response.send({})
    } catch (error) {
        response.send({
            error: JSON.stringify(error)
        })
    }
})

app.post('/forgotpassword', async (request, response) => {
    try {
        const { email } = request.body

        // mandar a senha por email
        await reset_password(email)

        response.send({
            email
        })
    } catch (error) {
        response.send({
            error: JSON.stringify(error)
        })
    }
})

app.post('/changepassword', async (request, response) => {
    try {
        const { email, password, newPassword, confirm_password } = request.body

        // change password
        await change_password(email, password, newPassword, confirm_password)

        response.send({
            data:{
                email,
                password,
                newPassword
            }
        })
    } catch (error) {
        response.send({
            error: JSON.stringify(error)
        })
    }
})
