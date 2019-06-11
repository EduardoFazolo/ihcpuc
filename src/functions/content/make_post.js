const User = require('../../models/user')
const Post = require('../../models/post')
const errortype = require('../../helpers/erros')
const regtags = require('./register_tags').register_tags


async function make_post(_email, title, content){

    const content_tags = new Set(content.match(/#[\w|\d]+/g))
    

    const author = await User.findOne({email:_email}).exec();
    

   const post_bbody = {
       title:title,
       author:author.id,
       content:content,
       tags:[...content_tags]
   }

   const new_post = new Post(post_bbody);
   new_post.save()

   regtags([...content_tags], new_post.id)

}

module.exports.make_post = make_post