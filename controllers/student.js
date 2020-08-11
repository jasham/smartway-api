const { Router } = require('express');
var router = Router()
const studentService = require('../services/student')

Add = (req, res) => {
    var result = ''
    studentService.SaveStudent(req.body).then(saveResult => {
        if (saveResult != undefined)
            result = 'success'
        else
            result = 'fail'
        res.send({ result: result })
    })
}

GetAll = (req, res) => {
    var result = ''
    studentService.AllStudent().then(list => {
        result = 'success'
        res.send({ result: result, data: list })
    })
}

router.post('/', Add)
router.post('/gty', Add)
router.get('', GetAll)

module.exports = router;
