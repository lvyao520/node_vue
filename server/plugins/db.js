module.exports = (app) => {
    const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost/node_vue', { useNewUrlParser: true, useUnifiedTopology: true })
}