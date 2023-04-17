-- CREATE database powertripdb;

CREATE TABLE brand (
    id SERIAL PRIMARY KEY NOT NULL,
    slug VARCHAR UNIQUE
);

CREATE TABLE category (
    id SERIAL PRIMARY KEY NOT NULL,
    slug VARCHAR UNIQUE
);

CREATE TABLE item (
    model VARCHAR,
    brand INTEGER NOT NULL REFERENCES brand(id),
    category INTEGER NOT NULL REFERENCES category(id)
);

INSERT INTO category(slug) VALUES 
    ('Full-Range Speaker'),
    ('Subwoofer'),
    ('Electronics'),
    ('Backline');

INSERT INTO brand(slug) VALUES
    ('Martin Audio'),
    ('MC2'),
    ('Custom'),
    ('Allen & Heath'),
    ('Denon'),
    ('Yamaha');

CREATE OR REPLACE FUNCTION add_item(
    model_name VARCHAR, 
    brand_name VARCHAR, 
    category_name VARCHAR
) RETURNS void AS $$
    DECLARE category_id INTEGER;
    DECLARE brand_id INTEGER;
BEGIN
    INSERT INTO category(slug) VALUES (category_name)
    RETURNING id into category_id;

    INSERT INTO brand(slug) VALUES (brand_name)
    RETURNING id into brand_id;

    INSERT INTO item(model, brand, category) VALUES (model_name, brand_id, category_id);
END; 
$$ LANGUAGE plpgsql;