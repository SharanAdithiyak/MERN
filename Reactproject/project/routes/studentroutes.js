const express = require('express');
const {createstudent} = require('../controller/studentcontroller');
const router = express.Router();
router.post('/', createstudent);

module.exports = router;
