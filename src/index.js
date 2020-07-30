const express = require('express');
const app = express();

const port = 80;

app.get('/',(req,res) => {
    res.send("Hello")
})
.listen(port,() => {
    console.log(`------Server Starting on Port ${port} -----------`)
})