DROP DATABASE IF EXISTS theatre_db;
CREATE DATABASE theatre_db;

USE theatre_db;

CREATE TABLE theatres (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    theatre_name VARCHAR(15) NOT NULL,
    location_numbers INT NOT NULL
);

CREATE TABLE addresses (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    theatre_id INT,
    address_location VARCHAR(75) NOT NULL,
    review_numbers INT NOT NULL,
    FOREIGN KEY (theatre_id)
    REFERENCES theatres(id)
);

CREATE TABLE reviewer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    address_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (address_id)
    REFERENCES addresses(id)
    ON DELETE SET NULL
);