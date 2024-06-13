const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ksrtc = require("./models/KSRTC")
const { ksrtcmodel } = require("./models/KSRTC")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://alvinkonukudy8:Alvin7736@cluster0.s7czq8v.mongodb.net/ksrtcDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/register",(req,res) => {
    let input = req.body
    let ksrtc = new ksrtcmodel(input)
    ksrtc.save()
    res.json({"status":"Success"})
})

app.listen(8081,()=>{
    console.log("Server is active")
})