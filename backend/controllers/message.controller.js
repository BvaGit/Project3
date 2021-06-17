const connectPg = require("../connectPostgreSQL/connectPg");
class MessageController {
  async getMessagesByChat(req, res) {
    try {
      const get = await connectPg.query(
        `SELECT * FROM messages WHERE (chat_id = ${req.params.chat_id})`
      );
      res.json(get.rows);
      console.log(get.rows);
    } catch (e) {
      console.log(e);
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
      res.json(create.rows);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new MessageController();
