const bcrypt = require('bcrypt');

exports.hashPassword = async(password)=>{
    return await bcrypt.hash(password,10);
}

exports.isMatch = async (password,hashedPassword)=>{
    return await bcrypt.compare(password,hashedPassword);
}