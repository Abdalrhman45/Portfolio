const UserType = require('../Models/userTypeModel');

exports.addNewUserType = async (req,res)=>{
    try
    {
        const userType =  await UserType.create(req.body);
        res.status(201).json(userType);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

exports.getUserTypes= async (req,res)=>{
    try{
        const userTypes = await UserType.find();
        res.status(200).json(userTypes);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}