// Requires
const express = require("express")
const app = express()
require("dotenv").config()

// requires end here

require("./model/index")


app.get("/",(req,res)=>{
    res.send("I am alive")
})



const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`server is started at port ${PORT}`)
})