-- Verify amap:initialization on pg

BEGIN;

SELECT * FROM admin WHERE false;
SELECT * FROM farmer WHERE false;
SELECT * FROM article WHERE false;
SELECT * FROM product WHERE false;
SELECT * FROM recipe WHERE false;
SELECT * FROM recipe_category WHERE false;
SELECT * FROM article_category WHERE false;
SELECT * FROM farmer_to_product WHERE false;
SELECT * FROM recipe_to_recipe_category WHERE false;
SELECT * FROM article_to_article_category WHERE false;

ROLLBACK;
