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
//   try {
//     const newField = req.body;
//     const userID = req.user.userId;
//     const queryAll = `SELECT * FROM persons WHERE id_user = '${userID}'`;
//     const queryCreate = `INSERT INTO persons (id_user, "firstName", "lastName", age, city, phone, email, company) VALUES ('${userID}', '${newField.firstName}', '${newField.lastName}', ${newField.age}, '${newField.city}', '${newField.phone}', '${newField.email}', '${newField.company}') RETURNING *`;
//     await this.client.query(queryCreate);
//     const result = await this.client.query(queryAll);
//     this.#setResponse(res, 200, result.rows);
//   } catch (err) {
//     this.#setResponse(res, 403, message.abstractErr);
//   }
// }


  async addParticipant(req, res) {
    try {
      const { ids, name } = req.body;
      // const chat_id = req.params.chat_id;
      // console.log("chat_id", chat_id);
      // const queryAll = `SELECT * FROM chat WHERE chat_id = '${chat_id}'`;
      const create = await connectPg.query(
        `INSERT INTO participants (id, name) VALUES ('{${ids}}', '${name}') RETURNING *`
      );
        // await connectPg.query(create);
        // const result = await connectPg.query(queryAll);
        res.status(200).json(create.rows);
        console.log("addParticipant", create.rows);
    } catch (e) {
      console.log(e)
      // res.status(400).json(message.abstractErr);
    }
  }
}

module.exports = new ParticipantsController();
