const { Router } = require('express');
var router = Router()
const accountService = require('../services/account')

Login = (req, res) => {
    var result = ''
    accountService.Login(req.body).then(saveResult => {
        if (saveResult != undefined)
            result = 'success'
        else
            result = 'fail'
        res.send({ result: result })
    })
}

Signup = (req, res) => {
    var result = ''
    accountService.Signup(req.body).then(user => {
        console.log(user)
        if (user !== undefined || user !== null)
            result = 'success'
        res.send({ result: result, data: user })
    })
}

router.post('/login', Login)
router.post('/signup', Signup)

module.exports = router;
