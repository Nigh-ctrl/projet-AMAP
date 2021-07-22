require('dotenv').config();
const jwt = require('jsonwebtoken');

const checkAdminMiddleware=(request, response,next)=>{
    const authHeader=request.headers['authorization'];
    const token =authHeader && authHeader.split(' ')[1];
    
    if(token===null){
        return response.status(401);
    }
    
    jwt.verify(token,process.env.JWT_SIGN_SECRET,(err,user)=>{
        if(err){
            response.status(403).json({"error":"Vous n'avez pas les droits"});
        }else{
            console.log(user);
            request.user=user;
            next();
        }
    })

}

module.exports=checkAdminMiddleware;