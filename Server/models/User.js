const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: {type: String,require: true,},
    username: {type: String,require: true,unique: true,},
    password: {type: String,require: true,},
    email: {type: String,require: true,unique: true,},
    contact: { type: String,require: true, },
    gender: { type: String, },
    address: {type: String, },
    DOB: {type: Date,},
    profileImage: {type: String},
    savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
}, { timestamps: true });

module.exports = mongoose.model('user', UserSchema);