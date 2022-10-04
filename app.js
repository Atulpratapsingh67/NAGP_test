const express = require('express');
const cors = require('cors');
const app = express();
const studentRoutes = require('./routes/student');
const teacherRoutes =require('./routes/teacher');

app.use(express.json());
app.use(cors());
app.use(studentRoutes);
app.use(teacherRoutes);
app.get('/',(req,res)=>{
    res.send("working");
})
const port = process.env.PORT || 5000;
app.listen(port);