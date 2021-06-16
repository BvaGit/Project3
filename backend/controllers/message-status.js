const connectPg = require("../connectPostgreSQL/connectPg");

class MessageStatusController {
  async getMessageStatus(req, res) {
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
}

module.exports = new MessageStatusController();
