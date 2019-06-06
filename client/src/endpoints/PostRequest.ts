import { Request, ServerError } from '../util/Request'
import {
    CreatePostEntrada,
    CreatePostSaida,
    LikePostEntrada,
    LikePostSaida,
    GetPostsFromTagsEntrada,
    GetPostsFromTagsSaida
} from './interfaces/post'

export class PostRequest {
    static criarPost(email: string, title: string, content: string) {
        let data: CreatePostEntrada = { email, title, content }
        const response: CreatePostSaida = Request.get('/createPost', data)
        if (response.error) throw new ServerError(response.error)
    }
    static likePost(postId: string) {
        let data: LikePostEntrada = { postId }
        const response: LikePostSaida = Request.get('/likepost', data)
        if (response.error) throw new ServerError(response.error)
    }
    static buscarPosts(tags: string[]) {
        let data: GetPostsFromTagsEntrada = { tags }
        const response: GetPostsFromTagsSaida = Request.get(
            '/getpostsfromtags',
            data
        )
        if (response.error) throw new ServerError(response.error)
        return response.data.post
    }
}
