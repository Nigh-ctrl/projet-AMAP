require('dotenv').config();
const jwt = require('jsonwebtoken');

//This method create a valid JWtoken for admins
const token={

    generateTokenForAdmin:(user)=>{
        return jwt.sign({
            adminId:user.id
        },
        process.env.JWT_SIGN_SECRET,
        {
            expiresIn:'1h'
        })

    }
}

module.exports=token;