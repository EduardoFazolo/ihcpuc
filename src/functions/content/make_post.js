const User = require('../../models/user')
const Post = require('../../models/post')
const regtags = require('./register_tags').register_tags


async function make_post(email, title, content){

    const content_tags = [...new Set(content.match(/#[\w|\d]+/g))]
    

    const author = await User.findOne({email:email}).exec();
    

   const post_bbody = {
       title:title,
       author:author.id,
       content:content,
       tags:content_tags
   }

   const new_post = new Post(post_bbody);

   
   await new_post.save()

   if(content_tags.length > 0){
        await regtags(content_tags, new_post.id)
   }
    
   

}

module.exports.make_post = make_post