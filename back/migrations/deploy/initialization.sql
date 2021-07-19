-- Deploy amap:initialization to pg

BEGIN;

CREATE TABLE admin(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    mdp VARCHAR(100) NOT NULL
);

CREATE TABLE farmer(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    biography TEXT NOT NULL,
    basket TEXT,
    admin_id INT NOT NULL REFERENCES admin(id)
);

CREATE TABLE article(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    admin_id INT NOT NULL REFERENCES admin(id)
);

CREATE TABLE product(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label VARCHAR(50) NOT NULL
);

CREATE TABLE recipe(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    ingredients VARCHAR(50) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    admin_id INT NOT NULL REFERENCES admin(id)
);

CREATE TABLE recipe_category(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label VARCHAR(50) NOT NULL
);

CREATE TABLE article_category(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label VARCHAR(50) NOT NULL
);

CREATE TABLE farmer_to_product(
    farmer_id INT NOT NULL REFERENCES farmer(id),
    product_id INT NOT NULL REFERENCES product(id)
);

CREATE TABLE recipe_to_recipe_category(
    recipe_id INT NOT NULL REFERENCES recipe(id),
    recipe_category_id INT NOT NULL REFERENCES recipe_category(id)
);

CREATE TABLE article_to_article_category(
    article_id INT NOT NULL REFERENCES article(id),
    article_category_id INT NOT NULL REFERENCES article_category(id)
);

COMMIT;
