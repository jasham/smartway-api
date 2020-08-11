const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Teacher=new Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    rcd:{type:Date, default:new Date()}
})

module.exports=mongoose.model('teacher',Teacher,'teacher')