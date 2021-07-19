const client = require('../database');

class Farmer{

    /**
     * The Farmer constructor
     * @param {Object} obj a litteral object with properties copied into the instance
     */
    constructor(obj={}){
        for(propName in obj){
            this[propName]=obj[propName];
        }
    }

    /**
     * Fetches all Farmer from the database
     * @static
     * @async
     * @returns {Array<Farmer>}
     */
    static async findAll(){
        try{
            const {rows}=await client.query('SELECT * FROM farmer');

            return rows.map(row=>new Farmer(row));

        }catch(error){
            console.log(error);
        }
    }

    /**
     * Fetches a single Farmer from the database
     * @static
     * @async
     * @param {id} id 
     * @returns {Farmer|null}
     */
    static async findOne(id){
        try{
            const preparedQuery={
                text:'SELECT * FROM farmer WHERE id=$1',
                values:[id]
            }

            const {rows}=await client.query(preparedQuery);
            if(rows[0]){
                return new Farmer(rows[0]);
            }else{
                return null;
            }

        }catch(error){
            console.log(error);
        }
    }

};

module.exports=Farmer;