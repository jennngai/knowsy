DROP DATABASE IF EXISTS knowsyapp;

CREATE DATABASE knowsyapp;

USE knowsyapp;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(30) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  location VARCHAR(50) NOT NULL,
  phone_number BIGINT(20) NOT NULL
);

CREATE TABLE purchase (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  product_url VARCHAR(1000) NOT NULL,
  vendor VARCHAR(50) NOT NULL,
  purchase_date DATETIME NOT NULL,
  purchase_price DECIMAL NOT NULL,
  user_email VARCHAR(100) NOT NULL
);

INSERT INTO user (username, first_name, last_name, email, location, phone_number) VALUES ('canadagurl91', 'Jasmine', 'Canuck', 'canadagurl@canadarocks.com', 'Vancouver', 4159201293);