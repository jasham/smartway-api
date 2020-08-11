const { Router } = require('express');
var router = Router()
const teacherService = require('../services/teacher')

Add = (req, res) => {
    var result = ''
    teacherService.SaveTeacher(req.body).then(saveResult => {
        if (saveResult != undefined)
            result = 'success'
        else
            result = 'fail'
        res.send({ result: result })
    })
}

GetAll = (req, res) => {
    var result = ''
    teacherService.AllTeacher().then(list => {
        result = 'success'
        res.send({ result: result, data: list })
    })
}

router.post('/', Add)
router.get('', GetAll)

module.exports = router;
