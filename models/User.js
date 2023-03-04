const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String},
    username: {type:String},
    password: {type:String},
    email: {type:String},
    emailVerified: {type: Boolean},   
    role: {type: String, default: 'Admin'} 
},{
    timestamps:true
});

module.exports = User = mongoose.model('User', userSchema);
