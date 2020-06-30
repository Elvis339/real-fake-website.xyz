const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        unique: true,
        required: true,
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
        required: true,
        unique: true,
    },
    end_date: {
        type: Date,
        default: null,
    },
    urls: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
