const con = require('../helper/db')
const auth = require('../helper/auth')
const uuid = require('uuid');
//const crypto=require('crypto')

Signup = async (data) => {
    try {
        data.uid = uuid.v4();
        let userObj={};
        // let hashPwd=crypto.createHash('sha256').update(data.password).f
        const saveResult = await new con.userModel(data).save();
        if (saveResult != undefined) {
            let tokenObj = {
                _id: saveResult._id,
                uid: saveResult.uid
            }
            var token = await auth.Signup(tokenObj);
            console.log('token=',token)
            userObj["_id"] = saveResult._id;
            userObj["uid"] = saveResult.uid;
            userObj["email"] = saveResult.email;
            userObj["phone"] = saveResult.phone;
            userObj["token"] = token;
        }
        return userObj;
    } catch (error) {
        console.log(error)
    }
}

Login = async () => {
    try {
        let list = await con.studentModel.find({}, { __v: 0 });
        return list
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    Signup,
    Login
}