const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const List = mongoose.model("List", listSchema);

module.exports = List;