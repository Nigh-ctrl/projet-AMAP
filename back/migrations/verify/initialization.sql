-- Verify amap:initialization on pg

BEGIN;

SELECT * FROM admin WHERE false;
SELECT * FROM farmer WHERE false;
SELECT * FROM article WHERE false;
SELECT * FROM product WHERE false;
SELECT * FROM recipe WHERE false;
SELECT * FROM farmer_to_product WHERE false;

ROLLBACK;
