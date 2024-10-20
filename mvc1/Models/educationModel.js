const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    school:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
}, {
    timestamps:true
});

module.exports = mongoose.model('Education',educationSchema);

