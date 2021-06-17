CREATE DATABASE blabber;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE myaccount(
    id BIGSERIAL PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    age INTEGER,
    city VARCHAR(100),
    company VARCHAR(100),
    hobbi VARCHAR(250),
    avatar VARCHAR(250),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


