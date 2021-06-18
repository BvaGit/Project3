CREATE DATABASE blabber-chat;

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



CREATE TABLE chat
(
  id INTEGER REFERENCES users,
  "chat_id" SERIAL PRIMARY KEY NOT NULL,
  name CHARACTER VARYING(30) NOT NULL
);

CREATE TABLE participants
(
  "id" INTEGER REFERENCES users,
  "chat_id" INTEGER REFERENCES chat
);

CREATE TABLE messages
(
  id INTEGER REFERENCES users,
  "message_id" BIGSERIAL PRIMARY KEY NOT NULL,
  "chat_id" INTEGER REFERENCES chat,
  content CHARACTER VARYING (200),
  "date_create" date NOT NULL
);

CREATE TABLE message_status
(
  id INTEGER REFERENCES users,
  "message_id" INTEGER REFERENCES messages,
  "date_last_read" date NOT NULL
);

