const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    description:{
        type:String,
    },
    cv:{
        type:String,
    },
    image:{
        type:String,
    },
},{
    timestamps:true
})

module.exports = mongoose.model('About',aboutSchema);