const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const forum_database = new Schema({
    name:String,
    expierience:String,
    complain:String,
    category:String,
    university:String,
});

const Forum = mongoose.model('forum',forum_database);
module.exports = Forum;