const mongoose = require('mongoose')
const { Schema } = mongoose


const articleSchema = new Schema ({
    title: { type: String, required: true },
    image: { type: String },
    date: { type: Number },
    description: { type: String },
    author: { type: String },
    content: {type: String, required: true },

})


module.exports = mongoose.model('Article', articleSchema)






