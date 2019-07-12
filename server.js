const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req,res)=>{
    let p = path.join(__dirname, './index.html')
    res.sendFile(p)
})

app.get('/xx', (req,res)=>{
    res.sendFile('hello')
})

app.use('/static', express.static(path.join(__dirname, 'public')))//路由/static 映射 public文件夹
app.listen(9999, ()=>{console.log('Exaple app listening on port 9999')})

