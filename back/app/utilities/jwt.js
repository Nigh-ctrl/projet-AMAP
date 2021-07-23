require('dotenv').config();
const jwt = require('jsonwebtoken');

const token={

    generateTokenForAdmin:(user)=>{
        return jwt.sign({
            adminId:user.id
        },
        process.env.JWT_SIGN_SECRET,
        {
            expiresIn:'1800s'
        })

    }
}

module.exports=token;