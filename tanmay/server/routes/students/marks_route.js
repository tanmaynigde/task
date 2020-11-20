const StudentsSchema = require("../../models/student_marks")
const router = require('express').Router()


router.post('/',
async(req,res)=>{
    const {student_name, student_marks, student_age}  = req.body
    
    try {
      let student = new StudentsSchema({
        student_name,
        student_marks,
        student_age
    })
    
    await student.save()
    res.status(200).send("Saved Succesfully")
    } catch (error) {
      res.send(error)
    }
    
 })

router.get('/', async(req,res)=> {
    try {
        let students_data = await StudentsSchema.find()
        res.json(students_data)
    } catch (error) {
        console.error(error)
        res.status(500).json("Server Error")
    }
})

router.get('/ascending_marks', async(req,res)=> {
    try {
        let students_data = await StudentsSchema.find().sort({student_marks:1})
        res.json(students_data)
    } catch (error) {
        console.error(error)
        res.status(500).json("Server Error")
    }
})

router.get('/sum_marks', async(req,res)=> {
    try {
        let students_data = await StudentsSchema.aggregate(
            [
                {
                  $group: {
                    _id: null,
                    total: {
                      $sum: "$student_marks"
                    
                  }
                }
            }
              ]
           
        )
        res.json(students_data)
    } catch (error) {
        console.error(error)
        res.status(500).json("Server Error")
    }
})


module.exports = router