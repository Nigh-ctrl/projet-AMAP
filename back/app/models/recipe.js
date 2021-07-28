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

            return rows.map(row=>new Recipe(row));

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
                return new Recipe(rows[0]);
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

            return rows.map(row=>new Recipe(row));

        }catch(error){
            console.log(error);
        }
    }

    /**
     * Add a recipe in the database
     * @async
     */
     async save(){

        try{
            if(this.id){
            
                const preparedQuery={
                    text:`UPDATE recipe
                    SET slug=$1, title=$2, ingredients=$3, description=$4, admin_id=$5, season_id=$6
                    WHERE id=$7`,
                    values:[this.slug,this.title,this.ingredients,this.description,this.admin_id,this.season_id,this.id]
                }
                
                await client.query(preparedQuery);
    
            }else{
                
                const preparedQuery={
                    text:`INSERT INTO recipe(slug, title, ingredients, description, admin_id, season_id) 
                    VALUES($1, $2, $3, $4, $5, $6) RETURNING id`,
                    values:[this.slug,this.title,this.ingredients,this.description,this.admin_id,this.season_id]
                }
    
                await client.query(preparedQuery);
            }
            
        }catch(error){
            console.log(error);
        }

    }
    

    /**
     * Delete the recipe from the database
     * @async
     * @returns {true}
     */
     async delete(){

        try{
            const id =this.id;

            const preparedQuery={
                text:`DELETE FROM recipe WHERE id=$1`,
                values:[id]
            }

            await client.query(preparedQuery);
            
        }catch(error){
            console.log(error);
        }
        
    }

};

module.exports=Recipe;