CREATE DATABASE blabber-chat;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
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
"message_id" INTEGER PRIMARY KEY NOT NULL,
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
