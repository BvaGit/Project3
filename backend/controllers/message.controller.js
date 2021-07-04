const connectPg = require("../connectPostgreSQL/connectPg");
const { message } = require("../support/constants");
class MessageController {
  async getMessages(req, res) {
    try {
      const get = await connectPg.query(
        `SELECT messages.id, messages.message_id, messages.chat_id, messages.content, messages.date_create,
        users.login, myaccount.avatar FROM messages LEFT JOIN users
	      ON messages.id = users.id
		    LEFT JOIN myaccount ON messages.id = myaccount.user_id
		    WHERE (chat_id = ${req.params.chat_id})`
      );
      res.status(200).json(get.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }

  async createMessage(req, res) {
    try {
      const { id, chat_id, content, date_create } = req.body;
      const create = await connectPg.query(
        `INSERT INTO messages (id, chat_id, content, date_create) VALUES (${id}, ${chat_id},
        '${content}', '${date_create}') RETURNING *`
      );
      res.status(200).json(create.rows);
      io.emit("send_message", create.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }

  async createSocketMessage(message) {
    try {
      const create = await connectPg.query(
        `INSERT INTO messages (id, chat_id, content, date_create) VALUES (${message.id},
        ${message.chat_id}, '${message.content}', '${message.date_create}') RETURNING *`
      );
      const userInfo = await connectPg.query(
        `SELECT users.login, myaccount.avatar FROM users
            LEFT JOIN myaccount ON myaccount.user_id = ${message.id}
            WHERE users.id = ${message.id}`
      );
      return [{ ...create.rows[0], ...userInfo.rows[0] }];
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new MessageController();
