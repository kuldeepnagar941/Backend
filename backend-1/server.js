const express = require("express")
const colors = require ("colors")
const dotenv = require("dotenv").config() 
const nodemon = require("nodemon");
const morgan = require("morgan");
const fileURLtoPath=require("url");
const PORT =5000;
const app = express();   //propertise of expess is tranfered into app
const path = require("path")
const userdata = require('./utility/userdata.json')

app.use(express.json());   //use=pridifine middleware

app.use(express.static(path.resolve(__dirname, "./public"))); //statics file wala middleware


app.get('/',(req,res)=>{
    res.send("kuldeep nagar")});


app.get("/user",(req,res)=>{
    res.send(userdata)});        

    

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./public", "index.html"))}) ;   

app.get("/contact",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./public", "contact.html"))}) ;   

    app.get("/stopwatch",(req,res)=>{
        res.sendFile(path.resolve(__dirname, "./public", "stopwatch.html"))}) ;       
            


app.listen(5000,()=>{
console.log(`app is listening ${PORT}`)
})

