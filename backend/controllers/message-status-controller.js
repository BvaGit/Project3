const connectPg = require("../connectPostgreSQL/connectPg");
const { message } = require("../support/constants");
class MessageStatusController {
  async getMessageStatus(req, res) {
    try {
      const get = await connectPg.query(
        `SELECT * FROM message_status WHERE (id = ${req.params.id})`
      );
      res.status(200).json(get.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }

  async createMessageStatus(req, res) {
    try {
      const { date_last_read } = req.body;
      const id = req.params.id;
      const message_id = req.params.message_id;
      const create = await connectPg.query(
        `INSERT INTO message_status (id, message_id, date_last_read) VALUES (${id}, ${message_id}, '${date_last_read}') RETURNING *`
      );
      res.status(200).json(create.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }
}

module.exports = new MessageStatusController();
