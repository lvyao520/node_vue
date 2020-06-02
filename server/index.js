// 知识点：要搞清楚整个服务器从0到1的一个大概起步过程
// 新建一个server文件夹，安装express，moogose,然后引用去创建服务器启动服务器

const express = require('express')
const app = express()
    // 知识点：node中设置跨域引用插件cors，一定要注意
app.use(express.json())
var router = require('./routes/adminweb')
    // router(app)
app.use(require('cors')())

// 4,在index.js使用路由，让app和路由连接起来,现在这个router都是/admin/api下面的子路由
app.use('/admin/api', router)


require('./plugins/db')(app)





app.listen(3000, () => {
    console.log('http://localhost:3000')
})