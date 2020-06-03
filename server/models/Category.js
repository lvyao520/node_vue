const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: { type: String },
    // 知识点：因为parentName为_id的值,所以注意写法，ref表示parentName是关联到Category集合的
    // parentName: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
    parentName: { type: String }
})
module.exports = mongoose.model('Category', schema)