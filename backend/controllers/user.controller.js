const connectPg = require("../connectPostgreSQL/connectPg");
const { generateAcccessToken } = require("../support/support");
class UserController {
  async createUser(req, res) {
    const { login, password } = req.body;
    try {
      const newUser = await connectPg.query(
        `INSERT INTO users (login, password) VALUES ('${login}', '${password}')`
      );
      res.status(201).json("user created successfully");
    } catch {
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

  async postOrUpdateMyAccount(req, res) {
    try {
      const { firstname, lastname, age, city, company, hobbi, avatar } =
        req.body;
      const id = req.params.id;
      let myAccount = null;
      const getMyAccount = await connectPg.query(
        `SELECT * FROM myaccount WHERE user_id='${id}'`
      );
      if (!getMyAccount.rows.length) {
        myAccount = await connectPg.query(
          `INSERT INTO myaccount (firstname, lastname, age, city, company, hobbi, avatar, user_id) VALUES ('${firstname}', '${lastname}', '${age}', '${city}', '${company}', '${hobbi}', '${avatar}', '${id}')`
        );
        res.status(201).json("Created my account");
      } else {
        myAccount = await connectPg.query(
          `UPDATE myaccount SET firstname='${firstname}', lastname='${lastname}', age='${age}', city='${city}', company='${company}', hobbi='${hobbi}', avatar='${avatar}' WHERE user_id=${id}`
        );
        res.status(200).json("Update my account");
      }
    } catch (e) {
      console.log(e);
      res.status(400).json("no update my account");
    }
  }

  async getMyAccount(req, res) {
    const id = req.params.id;
    try {
      const get = await connectPg.query(
        `SELECT * FROM myaccount WHERE user_id='${id}'`
      );
      res.status(200).json(get.rows);
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
