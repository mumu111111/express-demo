# express-demo
Express 基于 Node.js 平台，是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架
1. 基本结构
先回顾一下 express 使用的的过程，首先是把模块导入，然后当做方法执行，在返回值(对象)中调用 use方法 处理路由，调用 listen 监听端口。
````
const express = require('express')
const app = express()
app.use('/home', (req, res) => {
  res.end('home')
})
app.listen(8080, () => {
  console.log('port created successfully')
})

````
2. use()作用
把请求路径跟对应的处理函数存放在一个数组中，当请求到来的时候遍历数组，根据路径找到对应的方法执行。



