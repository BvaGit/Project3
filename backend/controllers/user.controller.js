const connectPg = require('../connectPostgreSQL/connectPg');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const generateAcccessToken = (id) => {
   const token = jwt.sign(id, secret);
   return token;
}


class UserController {

    async createUser(req, res){
        const { login, password } = req.body;
        try{
            const newUser = await connectPg.query(`INSERT INTO users (login, password) VALUES ('${login}', '${password}')`);
            res.status(201).json("user created successfully");
        } catch {
            res.status(400).json("user creation failed");
        }
    }

    async getUserByLoginAndPassword(req, res){
        const { login, password } = req.body;
        try{
            const getUser = await connectPg.query(`SELECT * FROM users WHERE login='${login}' AND password='${password}'`);
            const user = getUser.rows;
            if(user.length > 0){
                const id = user[0].id;
                const token = generateAcccessToken(id);
                res.status(200).json({id, token});
            } else {
                res.status(401).json("Unauthorized");
            }
        } catch {
            res.json("No");
        }
    }

    async getUser(req, res){
        const get = await connectPg.query(`SELECT * from users`);
        res.json(get.rows);
    }
}


module.exports =  new UserController();