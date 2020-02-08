const 
    mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        unique: true,
        required: true,
    },
    short_description: {
        type: String,
        unique: true,
        required: false,
    },
    created_by: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    dev_stack: {
        type: Array,
        required: false
    },
    start_date: {
        type: Date,
        required: false,
    },
    end_date: {
        type: Date,
        required: false
    },
    urls: {
        type: String,
        required: false
    },
}, {
    timestamps: true
})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article