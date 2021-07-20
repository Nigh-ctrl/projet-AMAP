const client = require('../database');

class Recipe{

    /**
     * The Recipe constructor
     * @param {Object} obj a litteral object with properties copied into the instance
     */
     constructor(obj={}){
        for(const propName in obj){
            this[propName]=obj[propName];
        }
    }
    
    /**
     * Fetches all recipes from the database
     * @static
     * @async
     * @returns {Array<Recipe>}
     */
    static async findAll(){
        try{
            const preparedQuery ={
                text:`SELECT * FROM recipe`
            }

            const {rows}=await client.query(preparedQuery);

            return rows.map(row=>new Farmer(row));

        }catch(error){
            console.log(error);
        }
    }
    
    /**
     * Fetches a single recipe from the database
     * @static
     * @async
     * @param {id} id 
     * @returns {Recipe|null}
     */
    static async findOne(id){
        try{
            const preparedQuery={
                text:`SELECT * FROM recipe WHERE id=$1`,
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

    /**
     * Fetches all recipes with the given category id from database
     * @static
     * @async
     * @param {number} seasonId The id of the searched season
     * @returns {Array<Recipe>} can be empty with unpopular season
     */
    static async findBySeason(seasonId){
        try{
            const preparedQuery={
                text:`SELECT * FROM recipe WHERE season_id=$1`,
                values:[seasonId]
            }

            const {rows}=await client.query(preparedQuery);

            return rows.map(row=>new Farmer(row));

        }catch(error){
            console.log(error);
        }
    }
    
};

module.exports=Recipe;