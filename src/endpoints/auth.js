const { app } = require('./serverMain')

app.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body

        // fazer login

        response.send({
            data: {
                name
            }
        })
    } catch (error) {
        response.send({
            error: error.toJSON()
        })
    }
})

app.post('/logoff', async (request, response) => {
    try {
        const { email } = request.body

        // fazer logoff

        response.send({})
    } catch (error) {
        response.send({
            error: error.toJSON()
        })
    }
})

app.post('/subscribe', async (request, response) => {
    try {
        const { name, lastName, email, password } = request.body

        // fazer subscribe

        response.send({})
    } catch (error) {
        response.send({
            error: error.toJSON()
        })
    }
})

app.post('/forgotpassword', async (request, response) => {
    try {
        const { email } = request.body

        // mandar a senha por email

        response.send({
            name
        })
    } catch (error) {
        response.send({
            error: error.toJSON()
        })
    }
})

app.post('/changepassword', async (request, response) => {
    try {
        const { email, password, newPassword } = request.body

        // change password

        response.send({
            name
        })
    } catch (error) {
        response.send({
            error: error.toJSON()
        })
    }
})
