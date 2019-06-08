import { Request, ServerError } from '../util/Request'
import {
    CreatePostEntrada,
    CreatePostSaida,
    LikePostEntrada,
    LikePostSaida,
    GetPostsFromTagsEntrada,
    GetPostsFromTagsSaida
} from './interfaces/post'
import { LoginLocalData } from './LoginRequest'

export class PostRequest {
    static async criarPost(title: string, content: string) {
        const email = LoginLocalData.email
        let data: CreatePostEntrada = { email, title, content }
        const response: CreatePostSaida = await Request.post(
            '/createPost',
            data
        )
        if (response.error) throw new ServerError(response.error)
    }
    static async likePost(postId: string) {
        let data: LikePostEntrada = { postId }
        const response: LikePostSaida = await Request.post('/likepost', data)
        if (response.error) throw new ServerError(response.error)
    }
    static async buscarPosts(tags: string[]) {
        let data: GetPostsFromTagsEntrada = { tags }
        const response: GetPostsFromTagsSaida = await Request.get(
            '/getpostsfromtags',
            data
        )
        if (response.error) throw new ServerError(response.error)
        return response.data.post
    }
}
