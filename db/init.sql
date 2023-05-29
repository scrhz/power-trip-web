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
    INSERT INTO item(model, brand, category) 
    VALUES (
        model_name, 
        (
            SELECT b.id
            FROM brand b
            WHERE b.slug = brand_name
        ), 
        (
            SELECT c.id
            FROM category c
            WHERE c.slug = category_name
        )
    );
END; 
$$ LANGUAGE plpgsql;

SELECT add_item('PT Monitor 15', 'Custom', 'Full-Range Speaker');
SELECT add_item('PT Cubo 15', 'Custom', 'Subwoofer');
SELECT add_item('Blackline XP12', 'Martin Audio', 'Subwoofer');
SELECT add_item('E4-75', 'MC2', 'Electronics');
SELECT add_item('E15', 'MC2', 'Electronics');
SELECT add_item('Delta 100 DSP', 'MC2', 'Electronics');
SELECT add_item('SC5000', 'Denon', 'Backline');
SELECT add_item('Xone 92', 'Allen & Heath', 'Backline');