const express = require('express')
const app = express()
const path = require('path')
//路径是 localhost:9999/使。 显示index.html页面
app.get('/', (req,res)=>{
    let p = path.join(__dirname, './index.html')
    res.sendFile(p)
})

app.get('/xx', (req,res)=>{
    res.sendFile('hello')
})
//我们会用到的静态资源 如 css  img等， 都可以通过/static找到映射的public下的资源
//路径是以/static开头的 ，直接映射 public文件夹， 就会去public里面找css/js/img等资源 。比如localhost：9998/static/1.css   就会自动去public中招有没有1.css
//也可以引用在html页面中， eg ：　    <link rel="stylesheet" href="/static/1.css">
app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(9999, ()=>{console.log('Exaple app listening on port 9999')})

