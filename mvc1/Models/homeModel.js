const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    title:{
        type:String,
    },
    image:{
        type:String,
    },
},{
    timestamps:true
})

module.exports = mongoose.model('Home',homeSchema);