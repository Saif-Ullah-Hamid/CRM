const express = require("express")
const {connectDb }= require("./db connection")
const complaintRouter = require("./comlaint.routes")

const app = express()
connectDb()

app.use(express.urlencoded({extended:false}))


// Routes
app.use("/api/user/complaint",complaintRouter)


app.listen(8000,()=>{
    console.log("server listening...")
})
