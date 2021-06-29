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
      const user = req.params.user_id;
      const get = await connectPg.query(
        `SELECT * FROM chat WHERE ${user} = any(id)`
      );
      res.status(200).json(get.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }
  async createChat(req, res) {
    try {
      const { ids, name } = req.body;
      const create = await connectPg.query(
        `INSERT INTO chat (id, name) VALUES ('{${ids}}', '${name}') RETURNING *`
      );
      res.status(200).json(create.rows);
      console.log("createChat", create.rows);
      io.emit("invited_room", create.rows);
    } catch (e) {
      console.log("err", e);
      // res.status(400).json(message.abstractErr);
    }
  }
}

module.exports = new ChatController();
