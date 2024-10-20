const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'UserType',
        required:true
    }

},{timestamps:true});

module.exports= mongoose.model('User',userSchema);