const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user=new Schema({
    uid:{type:String},
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String},
    rcd:{type:Date, default:new Date()}
})

module.exports=mongoose.model('user',user,'user')