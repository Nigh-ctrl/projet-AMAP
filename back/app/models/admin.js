const client = require('../database');

class Admin{

    /**
     * The Admin constructor
     * @param {Object} obj a litteral object with properties copied into the instance
     */
     constructor(obj={}){
        for(const propName in obj){
            this[propName]=obj[propName];
        }
    }

    /**
     * Fetches a single admin from the database
     * @static
     * @async
     * @param {emailAdresse} emailAdresse admin email adresse
     * @returns {Admin|null}
     */
     static async findOne(emailAdresse){
        try{
            const preparedQuery={
                text:`SELECT * FROM admin WHERE email=$1`,
                values:[emailAdresse]
            }
            
            const {rows}=await client.query(preparedQuery);
            if(rows[0]){
                return new Admin(rows[0]);
            }else{
                return null;
            }

        }catch(error){
            console.log(error);
        }
    }
};

module.exports=Admin;