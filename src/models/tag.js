const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TagSchema = new Schema({

    name:{type:String, required:true},
    counter:0,
    posts:[Schema.Types.ObjectId]

});

const Tag = mongoose.model('Tag', TagSchema)
module.exports = Tag