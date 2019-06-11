const Tag = require('../../models/tag')

async function register_tags(tags_arr, postId){

    for (const tag of tags_arr){
        await Tag.findOneAndUpdate({name:tag}, {name:tag, $push:{posts:postId},$inc:{counter:1}}, {upsert:true})
    }

}

module.exports.register_tags = register_tags