const { app } = require('./main')

app.get('/getalltags', async (request, response) => {
    try {
        // Buscar todas as tags

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

app.get('/searchtags', async (request, response) => {
    try {
        const { term } = JSON.parse(request.query.json || '')

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
