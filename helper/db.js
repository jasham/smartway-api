const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/SmartWay', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }).then(() => {
    console.log('db connected');
}).catch(err => {
    console.log(err);
});

module.exports = {
    studentModel: require('../models/student'),
    teacherModel: require('../models/teacher'),
    userModel: require('../models/user')
}