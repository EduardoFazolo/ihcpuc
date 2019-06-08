const Tag = require('../../models/tag')

async function register_tags(tags_arr){

    for (const tag of tags_arr){
        Tag.findOneAndUpdate({name:tag}, {name:tag, $inc:{counter:1}}, {upsert:true})
    }

}

module.exports = register_tags