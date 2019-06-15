const Post = require('../../models/post')


async function getposts(){


    const postsR = await Post.find().exec()
    
    if(!postsR){
        return []
    }

    // const posts = postsR.map(p => ({            
    //     _id: p._id,
    //     title: p.title,
    //     content: p.content,
    //     likesNumber: p.likesList.length,
    //     authorName: p.authorName
    // }))
    const posts = []
    for(const p of postsR){
        const d = {
            _id: p.id,
            title: p.title,
            content: p.content,
            likesNumber: 0,//p.likesList.length,
            authorName: p.authorName
        }
        posts.push(d)
    }

    return posts.reverse()
   

}

module.exports.getposts = getposts