import { Error } from './auth'

//METHOD POST -> /createPost
export interface CreatePostEntrada {
    email: string
    title: string
    content: string
}
export interface CreatePostSaida {
    error?: Error
}

//METHOD POST -> /likepost
export interface LikePostEntrada {
    postId: string
}
export interface LikePostSaida {
    error?: Error
}

//METHOD GET -> /getpostsfromtags
/**
 * Pegar todos os posts com as tags passadas.
 */
export interface GetPostsFromTagsEntrada {
    tags: string[]
}
export interface GetPostsFromTagsSaida {
    error?: Error
    data: {
        post: Post[]
    }
}
interface Post {
    _id: string
    title: string
    content: string
    likesNumber: number
    author: {
        name: string
    }
}
