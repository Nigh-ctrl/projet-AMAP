-- Revert amap:initialization from pg

BEGIN;

DROP TABLE article_to_article_category;
DROP TABLE recipe_to_recipe_category;
DROP TABLE farmer_to_product;
DROP TABLE article_category;
DROP TABLE recipe_category;
DROP TABLE recipe;
DROP TABLE product;
DROP TABLE article;
DROP TABLE farmer;
DROP TABLE admin;

COMMIT;
