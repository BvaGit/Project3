const connectPg = require("../connectPostgreSQL/connectPg");

class MessageStatusController {
  async getMessageStatus(req, res) {
    try {
      const get = await connectPg.query(
        `SELECT * FROM message_status WHERE (id = ${req.params.id})`
      );
      res.json(get.rows);
      console.log(get.rows);
    } catch (e) {
      console.log(e);
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
      res.json(create.rows);
    } catch (e) {
      console.log(e);
      // console.log("Something went wrong (:");
    }
  }
}

module.exports = new MessageStatusController();
