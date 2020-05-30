const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var newsSchema = new Schema({
    title: {
        type: String,
        require: true,
    }, // String is shorthand for {type: String}
    description: {
        type: String,
        require: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('News', newsSchema)