const { app } = require('./main')
const { make_post } = require('../functions/content/make_post')
const {getposts} = require('../functions/content/getposts')

app.post('/createPost', async (request, response) => {
    try {
        const { email, title, content } = request.body
        console.log(email)
        // criar post
        await make_post(email, title, content);
        

        response.send({})
    } catch (error) {
        response.send({
            error: JSON.stringify(error)
        })
    }
})

app.post('/likepost', async (request, response) => {
    try {
        const { postId } = request.body

        // dar like no post

        response.send({ likesNumber })
    } catch (error) {
        response.send({
            error: JSON.stringify(error)
        })
    }
})

app.get('/getposts', async (request, response) => {
    try {
        //const { tags } = JSON.parse(request.query.json || '')

        // pegar todos os posts com as tags passadas
        const post = await getposts();
        

        response.send({
            data: {
                post
            }
        })
    } catch (error) {
        response.send({
            error: JSON.stringify(error)
        })
    }
})
