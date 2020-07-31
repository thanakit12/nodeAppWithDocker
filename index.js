const express = require('express');
const app = express();

const port = 80;

app.get('/',(req,res) => {
    res.send("Hello")
})

app.get('/hello',(req,res) => {
    res.send("Hello World")
})

app.get('/Local',(req,res) => {
    res.send("This is A Local")
})
.listen(port,() => {
    console.log(`------Server Starting on Port ${port} -----------`)
})