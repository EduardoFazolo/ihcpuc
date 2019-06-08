const User = require('../../models/user')
const Post = require('../../models/post')
const errortype = require('../../helpers/erros')


async function make_post(_email, title, content){

    const content_tags = Set(content.match(/#(w|d)+/g))

   const post_bbody = {
       title:title,
       content:content,
       tags:[...content_tags]
   }

   const new_post = new Post(post_bbody);
   new_post.save()

}

module.exports = make_post