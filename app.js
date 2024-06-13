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

app.post("/search",(req,res) => {
    let input = req.body
    ksrtcmodel.find(input).then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    ).finally()
})

app.post("/viewall",(req,res) => {
    ksrtcmodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    ).finally()
})



app.listen(8081,()=>{
    console.log("Server is active")
})