const express = require("express")
const bodyparser=require("body-parser")
const app = express()
const user = require("./routes/user")
app.use(bodyparser.json())
const db = require("./db")
db()
app.use("/user",user)
app.listen(8000,()=>{
    console.log("listening to port 8000")
})