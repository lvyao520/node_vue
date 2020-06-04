// 知识点：要搞清楚整个服务器从0到1的一个大概起步过程
// 新建一个server文件夹，安装express，moogose,然后引用去创建服务器启动服务器

const express = require('express')
const app = express()
    // 知识点（难点）：node中设置跨域引用插件cors，一定要注意放在第四步引入路由之前
app.use(require('cors')())
app.use(express.json())
var router = require('./routes/adminweb')
    // router(app)

// 4,在index.js使用路由，让app和路由连接起来,现在这个router都是/admin/api/rest下面的子路由
app.use('/admin/api/rest/:resource', async(req, res, next) => {
    //知识点（重点）：通用接口curd的写法
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require('./models/' + modelName)
    next()
}, router)


require('./plugins/db')(app)


app.listen(3000, () => {
    console.log('http://localhost:3000')
})