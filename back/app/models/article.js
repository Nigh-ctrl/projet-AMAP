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

            return rows.map(row=>new Article(row));

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
                return new Article(rows[0]);
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

            return rows.map(row=>new Article(row));

        }catch(error){
            console.log(error);
        }
    }

    /**
     * Add or update an article in the database
     * @async
     */
    async save(){
        try{
            if(this.id){
            
                const preparedQuery={
                    text:`UPDATE article
                    SET slug=$1, title=$2, content=$3, admin_id=$4, category_id=$5
                    WHERE id=$6`,
                    values:[this.slug,this.title,this.content,this.admin_id,this.category_id,this.id]
                }
                
                await client.query(preparedQuery);

            }else{
                
                const preparedQuery={
                    text:`INSERT INTO article(slug, title, content, admin_id, category_id) 
                    VALUES($1, $2, $3, $4, $5) RETURNING id`,
                    values:[this.slug,this.title,this.content,this.admin_id,this.category_id]
                }
    
                await client.query(preparedQuery);   
            }
            
        }catch(error){
            console.log(error);
        }
    }

    /**
     * Delete the article from the database
     * @async
     */
    async delete(){

        try{
            const id =this.id;

            const preparedQuery={
                text:`DELETE FROM article WHERE id=$1`,
                values:[id]
            }

            await client.query(preparedQuery);

        }catch(error){
            console.log(error);
        } 
    }
};

module.exports=Article;