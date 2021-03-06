const client = require('../database');

class Farmer{

    /**
     * The Farmer constructor
     * @param {Object} obj a litteral object with properties copied into the instance
     */
    constructor(obj={}){
        for(const propName in obj){
            this[propName]=obj[propName];
        }
    }
    
    /**
     * Fetches all farmer from the database
     * @static
     * @async
     * @returns {Array<Farmer>}
     */
    static async findAll(){
        try{
            const preparedQuery ={
                text:`SELECT farmer.*,STRING_AGG(product.id::text,',') AS products_id
                FROM farmer 
                JOIN farmer_to_product ON farmer_to_product.farmer_id=farmer.id 
                JOIN product ON product.id=farmer_to_product.product_id 
                GROUP BY farmer.id 
                ORDER BY farmer.id;`
            }

            const {rows}=await client.query(preparedQuery);

            return rows.map(row=>new Farmer(row));

        }catch(error){
            console.log(error);
        }
    }
    
    /**
     * Fetches a single farmer from the database
     * @static
     * @async
     * @param {id} id 
     * @returns {Farmer|null}
     */
    static async findOne(id){
        try{
            const preparedQuery={
                text:`SELECT farmer.*,STRING_AGG(product.id::text,',') AS products_id
                FROM farmer
                JOIN farmer_to_product ON farmer_to_product.farmer_id=farmer.id
                JOIN product ON product.id=farmer_to_product.product_id
                WHERE farmer.id=$1
                GROUP BY farmer.id;`,
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
     * Fetches all farmers with the given category id from database
     * @static
     * @async
     * @param {number} productId The id of the searched product
     * @returns {Array<Farmer>} can be empty with unpopular products
     */
    static async findByProduct(productId){
        try{
            const preparedQuery={
                text:`SELECT farmer.*,product.label AS products
                FROM farmer
                JOIN farmer_to_product ON farmer_to_product.farmer_id=farmer.id
                JOIN product ON product.id=farmer_to_product.product_id
                WHERE product.id=$1
                ORDER BY farmer.id;`,
                values:[productId]
            }

            const {rows}=await client.query(preparedQuery);

            return rows.map(row=>new Farmer(row));

        }catch(error){
            console.log(error);
        }
    }

    /**
     * Add or update a farmer in the database
     * @async
     * @param {number} productIds An array of all id of the product related to the farmer
     */
     async save(productIds){

        try{
            if(this.id){
                
                const preparedQuery={
                    text:`SELECT update_farmer($1,$2)`,
                    values:[this,productIds]
                }
                
                await client.query(preparedQuery);

            }else{
            
                const preparedQuery={
                    text:`SELECT add_farmer($1,$2)`,
                    values:[this,productIds]
                }
    
                await client.query(preparedQuery);
            
            }
        }catch(error){
            console.log(error);
        }

    }

    /**
     * Delete the farmer from the database
     * @async
     */
     async delete(){

        try{
            const id =this.id;

            const preparedQuery={
                text:`DELETE FROM farmer WHERE id=$1`,
                values:[id]
            }

            await client.query(preparedQuery);
            
        }catch(error){
            console.log(error);
        }
    }
    
};

module.exports=Farmer;