
import { Error } from './auth'

interface Post {
    _id: string
    title: string
    content: string
    likesNumber: number
    author: {
        name: string
    }
}

//METHOD POST -> /createPost
export interface CreatePostEntrada{
    email: string
    title: string
    content: string
}
export interface CreatePostSaida{
    error: Error    
}

//METHOD POST -> /likepost
export interface LikePostEntrada{
    postId: string
}
export interface LikePostSaida{
    error: Error
}

//METHOD GET -> /getpostswithtag
/**
 * Pegar todos os posts com as tags passadas.
 */
export interface LikePostEntrada{
    tags: string[]
}
export interface LikePostSaida{
    error: Error
    data: {
        post: Post
    }
}