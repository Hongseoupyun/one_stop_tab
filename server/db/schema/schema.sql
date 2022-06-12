DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS listings CASCADE;
DROP TABLE IF EXISTS offers CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL 
);

CREATE TABLE listings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255),
  description VARCHAR(255),
  brand VARCHAR(255),
  size INTEGER,
  image_url VARCHAR(255),
  preference VARCHAR(255),
  active BOOLEAN DEFAULT TRUE
);

CREATE TABLE offers (
  id SERIAL PRIMARY KEY NOT NULL,
  listing_offer_made_to_id INTEGER REFERENCES listings(id) ON DELETE CASCADE,
  listing_being_offered_id INTEGER REFERENCES listings(id) ON DELETE CASCADE,
  complete BOOLEAN DEFAULT FALSE,
  pending BOOLEAN DEFAULT TRUE
);

