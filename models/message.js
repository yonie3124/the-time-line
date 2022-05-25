const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    fullName:{
        type: String,
        require: true
    },   
    message_post: {
        type: String,
        require: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('posting a message', messageSchema)