//We call here the class we needed
const Admin = require('../models/admin');
const jwtToken=require('../utilities/jwt');
const bcrypt = require('bcrypt');

const adminController={

    loginSubmit: async (request, response) => {
        // s'authentifier
        
        try{
            const email = request.body.email;
            const password = request.body.password;

            const user = await Admin.findOne(email);


            if(!user) {
                // l'utilisateur n'éxiste pas
                // on s'arrte là (return) affiche la page de login avec l'erreur
                return response.status(500).json({"error":"Cet admin n'existe pas"});
            }
            
            // si on arrive jusqu'ici c'est que l'utilisateur existe
            const isPasswordValid = bcrypt.compareSync(password, user.password);
            //const isPasswordValid = password;
            console.log(isPasswordValid);

            if(isPasswordValid) {
                return response.status(200).json({
                    "adminId":user.id,
                    "token":jwtToken.generateTokenForAdmin(user)
                });
            }else{
                // si le mot de passe ne correspond pas a celui qui à été encrypté en BDD alors on reaffiche la page de login avec une erreur
                return response.status(403).json({"error":"Mot de passe invalide"});
            }


        }catch(error){
            response.status(500).json(error.message);
        }
    
    },

}

module.exports = adminController;