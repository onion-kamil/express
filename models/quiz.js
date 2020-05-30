const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var quizSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    vote: {
        type: Number,
        require: true,
        default: 0
    }
});

module.exports = mongoose.model('Quiz', quizSchema)