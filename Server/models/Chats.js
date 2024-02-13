const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId,required: true,ref:"user"},
    image:{type:String,},
    message:{type:String,required:true}
}, { timestamps: true });

module.exports = mongoose.model('user', UserSchema);