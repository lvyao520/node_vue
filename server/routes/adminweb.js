// 知识点：要搞清楚为什么这个文件中的路由到处去，而不是把入口文件index中的app到进来，
// 因为index是项目启动入口文件，所以需要将app导入到入口文件中
// 另外这种路由导出方法也值得思考
// module.exports = function (app) {
//     app.post('/', (req, res) => {

//     })
// }


// 知识点：针对上面这种导出路由模式，express还提供了一种方法
const express = require('express')

// 1,创建一个路由容器
const router = express.Router({
        mergeParams: true
    })
    // const Category = require('../models/Category')
    // 2,把各个路由都挂在到路由容器中

// 保存分类接口
router.post('/', async(req, res) => {
        const model = await req.Model.create({
            parentName: req.body.parentName,
            name: req.body.name
        })
        res.send(model)
    })
    // 获取所有分类接口
router.get('/', async(req, res) => {
        const model = await req.Model.find().limit(10)
        res.send(model)
    })
    // 获取某个编辑分类接口
router.get('/:id', async(req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    //修改某个分类接口     知识点（重点）：相比注释用判断还有一种简单的写法,要掌握findByIdAndUpdate(）的用法
router.put('/:id', async(req, res) => {
        // const model = await req.Model.findById(req.params.id)
        // if (req.params.parentName) {
        //     model.parentName = req.body.parentName
        // } else {
        //     model.icon = req.body.icon
        // }
        // model.name = req.body.name
        // await model.save()
        // res.send(model)
        await req.Model.findByIdAndUpdate()
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    // 删除某个分类接口
router.delete('/:id', async(req, res) => {
        const model = await req.Model.findById(req.params.id)
        await req.Model.deleteOne(model)
            // 知识点：后端接口一定要返回信息
        res.send({
            success: true
        })
    })
    // 3,导出路由
module.exports = router
    // 4,在index.js入口文件中使用router