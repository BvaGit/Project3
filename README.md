# React Project Chat Application

# Getting Started with npm start

# User

## Registration

Чтобы произвести регистрацию в приложении необходимо отправить **POST** запрос по роуту **_/api/user/reg_** <br>
Тело запроса должно выглядеть следующим образом:

```
{
  login:'admin',
  password: 'admin123'
}
```

Все поля обязательны. Поле логин можно вводить только латинские символы и цифры (3-8 символов) <br>
В поле пароль можно вводить латинские символы, цифры и спецсимволы (6-12 символов)

## Login

Для авторизации необходимо отправить **POST** запрос по роуту **_/api/user/auth_** <br>
Тело запроса должно выглядеть следующим образом:

```
{
  login:'admin',
  password: 'admin123'
}
```

В ответе приходят токен и id пользователя

## Settings

## Users

Для получения всех пользователей необходимо отправить **GET** запрос по роуту **_/api/users_**<br>

Обязательно указать полученный при авторизации токен в headers

# Chat

## PostgreSQL

### GET

Для получения всех чатов необходимо отправить **GET** запрос по роуту **_/api/chat_**<br>

Для поиска по определенному чату необходимо отправить **GET** запрос по роуту **_/api/chat/:chat_id_**<br>

### POST

# Messages

## PostgreSQL

### GET

Для получения всех сообщений по определенному чату необходимо отправить **GET** запрос по роуту **_/api/chat_**<br>

Для поиска по определенному чату необходимо отправить **GET** запрос по роуту **_/api/messages/:chat_id_**<br>

### POST

Для создания нового сообщения **GET** запрос по роуту **_/api/messages_**<br>
