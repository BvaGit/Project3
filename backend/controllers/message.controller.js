const connectPg = require("../connectPostgreSQL/connectPg");

class MessageController {
  async getMessagesByChat(req, res) {
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

  async createMessage(req, res) {
    // try {
    //   const { message_id, chat_id, content, date_create } = req.body;
    //   const queryAll = `SELECT * FROM messages WHERE id = ${req.params.id}`;
    //   const queryCreate = await connectPg.query(
    //     `INSERT INTO messages (id, message_id, chat_id, content, date_create) VALUES (${id}, ${message_id}, ${chat_id}, '${content}', '${date_create}')`
    //   );
    //   const result = await connectPg.query(queryAll);
    //   res.json(queryCreate.rows);
    //   console.log(queryCreate.rows);
    // } catch (e) {
    //   console.log(e);
    // }

    try {
      const { id, message_id, chat_id, content, date_create } = req.body;
      // const id = req.params.id;
      const queryAll = `SELECT * FROM messages`;
      const queryCreate = `INSERT INTO messages (id, message_id, chat_id, content, date_create) VALUES (${id}, ${message_id}, ${chat_id}, '${content}', '${date_create}')`;
      await connectPg.query(queryCreate);
      const result = await connectPg.query(queryAll);
      res.json(result.rows);
      console.log(result.rows);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new MessageController();
