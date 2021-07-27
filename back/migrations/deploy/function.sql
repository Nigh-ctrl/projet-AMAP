-- Deploy amap:function to pg

BEGIN;

CREATE FUNCTION add_farmer(farmer json,product int ARRAY) RETURNS int AS $$
	WITH productids AS(
		SELECT unnest(product) AS id
	), thefarmer AS (
		INSERT INTO farmer (firstname, name, location, biography, basket, admin_id) VALUES(
			$1->>'firstname',
			$1->>'name',
			$1->>'location',
			$1->>'biography',
			$1->>'basket',
			($1->>'admin_id')::int
		) RETURNING id
	)
	INSERT INTO farmer_to_product(farmer_id,product_id)
	(SELECT (SELECT id FROM thefarmer), productids.id FROM productids) RETURNING (SELECT id FROM thefarmer);
$$ LANGUAGE SQL STRICT;


CREATE FUNCTION update_farmer(farmer json,product int ARRAY) RETURNS int AS $$
	DELETE FROM farmer_to_product WHERE farmer_id=($1->>'id')::int;
	WITH productids AS(
		SELECT unnest(product) AS id
	), thefarmer AS (
		UPDATE farmer SET
			firstname=$1->>'firstname',
			name=$1->>'name',
			location=$1->>'location',
			biography=$1->>'biography',
			basket=$1->>'basket',
			admin_id=($1->>'admin_id')::int
			WHERE id=($1->>'id')::int
		RETURNING id
	)
	
	INSERT INTO farmer_to_product(farmer_id,product_id)
	(SELECT (SELECT id FROM thefarmer), productids.id FROM productids) RETURNING (SELECT id FROM thefarmer);
$$ LANGUAGE SQL STRICT;



COMMIT;
