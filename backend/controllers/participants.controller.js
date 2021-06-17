const connectPg = require("../connectPostgreSQL/connectPg");
const { message } = require("../support/constants");

class ParticipantsController {
  async getParticipants(req, res) {
    try {
      const get = await connectPg.query(`SELECT * FROM participants`);
      res.status(200).json(get.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }

  async getParticipantsById(req, res) {
    try {
      const get = await connectPg.query(
        `SELECT * FROM participants WHERE (id = ${req.params.id})`
      );
      res.status(200).json(get.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }

  async addParticipant(req, res) {
    try {
      const id = req.params.id;
      const chat_id = req.params.chat_id;
      const create = await connectPg.query(
        `INSERT INTO participants (id, chat_id) VALUES (${id}, '${chat_id}') RETURNING *`
      );
      res.status(200).json(create.rows);
    } catch (e) {
      res.status(400).json(message.abstractErr);
    }
  }
}

module.exports = new ParticipantsController();
