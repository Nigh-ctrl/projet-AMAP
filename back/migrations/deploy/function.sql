-- Deploy amap:function to pg

BEGIN;

/*
CREATE FUNCTION add_farmer(farmer json,product int ARRAY) RETURNS farmer AS $$
	
	WITH productIds AS(
		SELECT unnest(product)id
	)
	
    INSERT INTO farmer (firstname, name, location, biography, basket, admin_id)
    VALUES(
		$1->>'firstname', 
		$1->>'name', 
		$1->>'location', 
		$1->>'biography', 
		$1->>'basket', 
		($1->>'admin_id')::int
	)
    RETURNING *;
	
	INSERT INTO farmer_to_product(farmer_id,product_id)
	SELECT ($1->>'id')::int, productIds FROM productIds
$$ LANGUAGE SQL STRICT;

DROP FUNCTION add_farmer(json,integer ARRAY);
*/

COMMIT;
