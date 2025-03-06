const express = require('express')
const booksRoutes = require('./routes/booksRoutes')
const app = express()

app.use(express.json())

app.use("/user",booksRoutes)




app.listen(3000,()=>{
    console.log("server start on port 3000");
    
})