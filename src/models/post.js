const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    title:{type:String, required:true},
    author:{type:Schema.Types.ObjectId, required:true},
    content:{type:String, required:true},
    tags:[String],
    likeList:[Schema.Types.ObjectId]

});

const Post = mongoose.model('Post', PostSchema)
module.exports = Post