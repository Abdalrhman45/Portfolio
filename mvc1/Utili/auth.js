const jwt = require('jsonwebtoken');
const secret_Key = "v7Y~XZ$-FnI^r`mFx3f%VFD[r&Po0kbVhQ!t)OK6)[cLPYS.2BJq%hKc?SV`q>1";

exports.createToken = (obj)=>{
   return jwt.sign(obj,secret_Key,{expiresIn : '1h'});
}

exports.verifyToken = (req,res,next)=>{
   try{ 
    const token = req.header('Authorization')?.replace('Bearer ','');
    if(!token){
        return res.status(401).send('Access denied');
    }
    const verified = jwt.verify(token,secret_Key);
    req.user = verified;
    next()
} 
    catch(err){
        res.status(500).send(err.message)
    }
}