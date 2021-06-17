const connectPg = require("../connectPostgreSQL/connectPg");
const { message } = require("../support/constants");

class ChatController {
  async getChats(req, res) {
    try {
      const get = await connectPg.query(`SELECT * FROM chat`);
      res.status(200).json(get.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }

  async getChatById(req, res) {
    try {
      const get = await connectPg.query(
        `SELECT * FROM chat WHERE (chat_id = ${req.params.chat_id})`
      );
      res.status(200).json(get.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }

  async createChat(req, res) {
    try {
      const { name } = req.body;
      const id = req.params.id;
      const create = await connectPg.query(
        `INSERT INTO chat (id, name) VALUES (${id}, '${name}') RETURNING *`
      );
      res.status(200).json(create.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }
}

module.exports = new ChatController();
