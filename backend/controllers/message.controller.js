const connectPg = require("../connectPostgreSQL/connectPg");
const { message } = require("../support/constants");
class MessageController {
  async getMessagesByChat(req, res) {
    try {
      const get = await connectPg.query(
        `SELECT * FROM messages WHERE (chat_id = ${req.params.chat_id})`
      );
      res.status(200).json(get.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }

  async createMessage(req, res) {
    try {
      const { content, date_create } = req.body;
      const id = req.params.id;
      const chat_id = req.params.chat_id;
      const create = await connectPg.query(
        `INSERT INTO messages (id, chat_id, content, date_create) VALUES (${id}, ${chat_id}, '${content}', '${date_create}') RETURNING *`
      );
      res.status(200).json(create.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }
}

module.exports = new MessageController();
