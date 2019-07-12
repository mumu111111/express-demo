const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req,res)=>{
    let p = path.join('__dirname', ',./index.html')
    res.sendFile(p)
})

app.get('/xx', (req,res)=>{
    let p = path.join('__dirname', ',./index.html')
    res.sendFile('hello')
})
app.listen(9999, ()=>{console.log('Exaple app listening on port 9999')})

