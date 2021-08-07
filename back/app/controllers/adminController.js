//We call here the class we needed
const Admin = require('../models/admin');
const jwtToken=require('../utilities/jwt');
const bcrypt = require('bcrypt');

const adminController={

    //This method for admin log in
    loginSubmit: async (request, response) => {
        //Authentification
        
        try{
            const email = request.body.email;
            const password = request.body.password;

            const user = await Admin.findOne(email);


            if(!user) {
                //The user doesn't exist
                //We stop the program here and provide the error
                return response.status(500).json({"error":"Cet admin n'existe pas"});
            }
            
            //If we arrive here, that's mean the user exist
            const isPasswordValid = bcrypt.compareSync(password, user.password);

            if(isPasswordValid) {
                return response.status(200).json({
                    "adminId":user.id,
                    "token":jwtToken.generateTokenForAdmin(user)
                });
            }else{
                //If the password doesn't correspond to the one encrypted in database, we provide an error
                return response.status(403).json({"error":"Mot de passe invalide"});
            }


        }catch(error){
            response.status(500).json(error.message);
        }
    
    },

}

module.exports = adminController;