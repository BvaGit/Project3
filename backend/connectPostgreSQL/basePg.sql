CREATE DATABASE "blabber-chat";

ALTER DATABASE "blabber-chat" SET timezone TO 'Europe/Kiev';

-- обязательно в таблице поле 'GLOBAL CHAT'
INSERT INTO chat (name) VALUES ('GLOBAL CHAT') RETURNING *

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE myaccount(
    id BIGSERIAL PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    age VARCHAR(100),
    city VARCHAR(100),
    company VARCHAR(100),
    hobbi VARCHAR(250),
    avatar VARCHAR(250),
    locale VARCHAR(100),
    theme VARCHAR(100),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE chat
(
  id INTEGER [],
  chat_id SERIAL PRIMARY KEY NOT NULL,
  name CHARACTER VARYING(30) NOT NULL
);

CREATE TABLE participants
(
  id INTEGER [],
  chat_id SERIAL PRIMARY KEY NOT NULL,
  name CHARACTER VARYING(30) NOT NULL
);

CREATE TABLE messages
(
  id INTEGER REFERENCES users,
  "message_id" BIGSERIAL PRIMARY KEY NOT NULL,
  "chat_id" INTEGER REFERENCES chat,
  content CHARACTER VARYING (200),
  "date_create" CHARACTER VARYING (50) NOT NULL
);

CREATE TABLE message_status
(
  id INTEGER REFERENCES users,
  "message_id" INTEGER REFERENCES messages,
  "date_last_read" CHARACTER VARYING (50) NOT NULL
);

ALTER SYSTEM SET timezone TO 'Europe/Kiev';
