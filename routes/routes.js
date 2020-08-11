const { Router } = require('express');
var router = Router();

router.use('/api/v1',require('../controllers/account'));
router.use('/api/v1/student',require('../controllers/student'));
router.use('/api/v1/teacher',require('../controllers/teacher'));


module.exports=router;