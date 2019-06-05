const { app } = require('./serverMain')

app.get('/searchtags', async (request, response) => {
    try {
        const { term } = request.body

        // Buscar tags com base no termo passado

        response.send({
            data: {
                tags
            }
        })
    } catch (error) {
        response.send({
            error: error.toJSON()
        })
    }
})
