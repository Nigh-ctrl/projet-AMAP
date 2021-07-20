const client = require('../database');

class Article{

    /**
     * The Article constructor
     * @param {Object} obj a litteral object with properties copied into the instance
     */
     constructor(obj={}){
        for(const propName in obj){
            this[propName]=obj[propName];
        }
    }
    
    /**
     * Fetches all articles from the database
     * @static
     * @async
     * @returns {Array<Article>}
     */
    static async findAll(){
        try{
            const preparedQuery ={
                text:`SELECT * FROM article`
            }

            const {rows}=await client.query(preparedQuery);

            return rows.map(row=>new Farmer(row));

        }catch(error){
            console.log(error);
        }
    }
    
    /**
     * Fetches a single article from the database
     * @static
     * @async
     * @param {id} id 
     * @returns {Article|null}
     */
    static async findOne(id){
        try{
            const preparedQuery={
                text:`SELECT * FROM article WHERE id=$1`,
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
     * Fetches all articles with the given category id from database
     * @static
     * @async
     * @param {number} categoryId The id of the searched category
     * @returns {Array<Article>} can be empty with unpopular categories
     */
    static async findByCategory(categoryId){
        try{
            const preparedQuery={
                text:`SELECT * FROM article WHERE category_id=$1`,
                values:[categoryId]
            }

            const {rows}=await client.query(preparedQuery);

            return rows.map(row=>new Farmer(row));

        }catch(error){
            console.log(error);
        }
    }
    
};

module.exports=Article;