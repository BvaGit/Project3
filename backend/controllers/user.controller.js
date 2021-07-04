const prod_url = require("../support/constants");

const connectPg = require("../connectPostgreSQL/connectPg");
const { generateAcccessToken } = require("../support/support");
const url = `${prod_url}/avatar/`;
class UserController {
  async createUser(req, res) {
    const { login, password } = req.body;
    try {
      const newUser = await connectPg.query(
        `INSERT INTO users (login, password) VALUES ('${login}', '${password}')`
      );
      const getId = await connectPg.query(`SELECT id FROM users`);
      let ids = Object.values(getId.rows);
      let arrIds = ids.map((el) => el.id);
      const newGlobalChat = await connectPg.query(
        `UPDATE chat SET id = ('{${arrIds}}') WHERE name= 'GLOBAL CHAT'`
      );
      res.status(201).json("user created successfully");
    } catch (e) {
      res.status(400).json("user creation failed");
    }
  }

  async login(req, res) {
    const { login, password } = req.body;
    try {
      const getUser = await connectPg.query(
        `SELECT * FROM users WHERE login='${login}' AND password='${password}'`
      );
      const user = getUser.rows;
      if (user.length > 0) {
        const id = user[0].id;
        const token = generateAcccessToken(id);
        res.status(200).json({ id, token });
      } else {
        res.status(401).json("Unauthorized");
      }
    } catch (e) {
      res.json("No");
    }
  }

  async addToken(req, res) {
    try {
      const getUser = await connectPg.query(
        `SELECT * FROM users WHERE id=${req.user}`
      );
      const user = getUser.rows;
      const id = user[0].id;
      const token = generateAcccessToken(id);
      res.status(200).json({ id, token });
    } catch (e) {
      console.log(e);
    }
  }

  async updateLoginOrPassword(req, res) {
    const { login, password } = req.body;
    const id = req.params.id;
    try {
      const updateLoginOrPassworw = await connectPg.query(
        `UPDATE users SET login='${login}', password='${password}' WHERE id=${id}`
      );
      res.status(200).json("update successfully");
    } catch {
      res.status(400).json("unsuccessful change of username or password");
    }
  }

  async uploadAvatar(req, res) {
    try {
      const id = req.params.id;
      const avaName = req.file.originalname;
      const uploadAva = await connectPg.query(
        `SELECT * FROM myaccount WHERE user_id='${id}'`
      );
      console.log("uploadAvatar", uploadAva.rows[0].avatar);
      if (uploadAva.rows.length === 0) {
        await connectPg.query(
          `INSERT INTO myaccount (avatar, user_id) VALUES ('${url}${avaName}', '${id}') `
        );
        res.status(200);
      } else {
        await connectPg.query(
          `UPDATE myaccount SET avatar='${url}${avaName}' WHERE user_id='${id}' `
        );
        res.status(200);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getAvatar(req, res) {
    try {
      const id = req.params.id;
      const ava = await connectPg.query(
        `SELECT avatar FROM myaccount WHERE user_id='${id}'`
      );
      console.log(ava.rows[0].avatar);
      res.status(200).json(ava.rows[0].avatar);
    } catch (e) {
      console.log(e);
    }
  }

  async postOrUpdateMyAccount(req, res) {
    try {
      const { firstname, lastname, age, city, company, hobbi } = req.body;
      const id = req.params.id;
      const getMyAccount = await connectPg.query(
        `SELECT * FROM myaccount WHERE user_id='${id}'`
      );
      if (!getMyAccount.rows.length) {
        await connectPg.query(
          `INSERT INTO myaccount (firstname, lastname, age, city, company, hobbi, user_id) VALUES ('${firstname}', '${lastname}', '${age}', '${city}', '${company}', '${hobbi}', '${id}')`
        );
        const fname = await connectPg.query(
          `SELECT firstname FROM myaccount WHERE user_id=${id}`
        );
        res.status(200).json(fname.rows[0]);
      } else {
        await connectPg.query(
          `UPDATE myaccount SET firstname='${firstname}', lastname='${lastname}', age='${age}', city='${city}', company='${company}', hobbi='${hobbi}' WHERE user_id=${id}`
        );
        const fname = await connectPg.query(
          `SELECT firstname FROM myaccount WHERE user_id=${id}`
        );
        res.status(200).json(fname.rows[0]);
      }
    } catch (e) {
      console.log(e);
      res.status(400).json("no update my account");
    }
  }

  async getMyAccount(req, res) {
    try {
      const get = await connectPg.query(
        `SELECT * FROM myaccount WHERE user_id='${req.user}'`
      );
      if (get.rows.length > 0) {
        res.status(200).json(get.rows);
      } else {
        const getEmpty = await connectPg.query(
          `INSERT INTO myaccount (firstname, lastname, age, city, company, hobbi, avatar, user_id) VALUES ('', '', '', '', '', '', '', '${req.user}')`
        );
        console.log(getEmpty.rows[0]);
        res.json(getEmpty.rows[0]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getUsers(req, res) {
    try {
      const get = await connectPg.query(`SELECT id, login from users`);
      res.json(get.rows);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
