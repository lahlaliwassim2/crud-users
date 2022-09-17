const mongose = require('mongoose');
const Schema = mongose.Schema;

const UserSchema = new Schema({
    Email: String,
    Lastname: String,
    Firstname: String,
    Age: String
},{timestamps: true})









module.exports= mongose.model('users',UserSchema)
