const express = require('express')
const app = express()

const database = require('./config/db')
database()

app.use(express.json({extended:true}))

const PORT = process.env.PORT || 5000

app.use('/marks',require('./routes/students/marks_route'))

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})

