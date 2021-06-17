const connectPg = require("../connectPostgreSQL/connectPg");

class ChatController {
  async getChats(req, res) {
    try {
      const get = await connectPg.query(`SELECT * FROM chat`);
      res.json(get.rows);
    } catch (e) {
      console.log(e);
    }
  }

  async getChatsById(req, res) {
    try {
      const get = await connectPg.query(
        `SELECT * FROM chat WHERE (chat_id = ${req.params.chat_id})`
      );
      res.json(get.rows);
    } catch (e) {
      console.log(e);
    }
  }

  async createChat(req, res) {
    try {
      const { name } = req.body;
      const id = req.params.id;
      const create = await connectPg.query(
        `INSERT INTO chat (id, name) VALUES (${id}, '${name}') RETURNING *`
      );
      res.json(create.rows);
    } catch (e) {
      console.log("Something went wrong (:");
    }
  }
}

module.exports = new ChatController();
