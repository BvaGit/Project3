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
      const { ids, name } = req.body;
      const create = await connectPg.query(
        `INSERT INTO chat (id, name) VALUES ('{${ids}}', '${name}') RETURNING *`
      );
      await connectPg.query(
        `INSERT INTO participants (id, chat_id) SELECT chat.id from chat where id='{${ids}}' AND chat_id=${create.chat_id})`);
      // await connectPg.query(
      //   `INSERT INTO participants (id, chat_id) VALUES ('{${ids}}', ${create.chat_id})
      //   WHERE (chat_id = ${create.chat_id})`
      // );
      res.status(200).json(create.rows);
      console.log("create.rows", create.rows);
      io.emit("invited_room", create.rows);
    } catch (e) {
      console.log("err", e);
      // res.status(400).json(message.abstractErr);
    }
  }
}

module.exports = new ChatController();
