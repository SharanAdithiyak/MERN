const express=require('express')
const {createstudent}=require('../controller/studentcontroller')
const {getAllStudents}=require('../controller/studentcontroller')
const {getStudent}=require('../controller/studentcontroller')
const {deleteStudent}=require('../controller/studentcontroller')
const {updateStudent}=require('../controller/studentcontroller')

const router=express.Router()

router.post('/',createstudent)
router.get('/allstudents',getAllStudents)
router.get('/allstudents/:id',getStudent)
router.delete('/deletestudent/:id',deleteStudent)
router.put('/updatestudent/:id',updateStudent)

module.exports=router
