import { ServerError } from './auth'

//METHOD POST -> /createPost
export interface CreatePostEntrada {
    email: string
    title: string
    content: string
}
export interface CreatePostSaida {
    error?: ServerError
}

//METHOD POST -> /likepost
export interface LikePostEntrada {
    postId: string
}
export interface LikePostSaida {
    error?: ServerError
}

//METHOD GET -> /getpostsfromtags
/**
 * Pegar todos os posts com as tags passadas.
 */
export interface GetPostsFromTagsEntrada {
    tags: string[]
}
export interface GetPostsFromTagsSaida {
    error?: ServerError
    data: {
        post: Post[]
    }
}
export interface Post {
    _id: string
    title: string
    content: string
    likesNumber: number
    authorName: string
}
