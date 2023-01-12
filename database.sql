-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

--Database name: group_shopping_list_app

CREATE TABLE "shopping_list" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" INT NOT NULL,
    "unit" VARCHAR(20),
    "is_purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shopping_list"
    ("name", "quantity", "unit")
VALUES
    ('Apples', 5, 'lbs'),
    ('Bread', 1, 'loaf'),
    ('Eggs', 2, 'dozen');