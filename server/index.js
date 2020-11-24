// import express from 'express';
const express =require('express')
// import bodyParser from 'body-parser';
// import cors from 'cors';
 const bodyParser =require('body-parser')
 const cors=require('cors')
const port=3005
// import mongoose from 'mongoose'
const {mongoose} =require('./config/db')
const {routes} =require('./config/routes/post')

const app=express()


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
// app.use(express.json())


app.use('/',routes)

app.listen(port,()=>{
    console.log(`Listining to port ${port}`)
})

