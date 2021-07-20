-- Revert amap:initialization from pg

BEGIN;

DROP TABLE farmer_to_product;
DROP TABLE recipe;
DROP TABLE season;
DROP TABLE product;
DROP TABLE article;
DROP TABLE category;
DROP TABLE farmer;
DROP TABLE admin;

COMMIT;
