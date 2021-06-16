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
}

module.exports = new ChatController();
