const { app } = require('./serverMain')

app.post('/createPost', async (request, response) => {
    try {
        const { email, title, content } = request.body

        // criar post

        response.send({})
    } catch (error) {
        response.send({
            error: error.toJSON()
        })
    }
})

app.post('/likepost', async (request, response) => {
    try {
        const { postId } = request.body

        // dar like no post

        response.send({})
    } catch (error) {
        response.send({
            error: error.toJSON()
        })
    }
})

app.get('/getpostswithtag', async (request, response) => {
    try {
        const { tags } = JSON.parse(request.query.json || '')

        // pegar todos os posts com as tags passadas

        response.send({
            data: {
                posts
            }
        })
    } catch (error) {
        response.send({
            error: error.toJSON()
        })
    }
})
