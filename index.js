const express = require('express');
const app = express();

const port = 3002;

app.get('/',(req,res) => {
    res.send("Hello")
})

app.get('/hello',(req,res) => {
    res.send("Hello World")
})

app.get('/uat',(req,res) => {
    res.send("This Is UAT")
})
.listen(port,() => {
    console.log(`------Server Starting on Port ${port} -----------`)
})