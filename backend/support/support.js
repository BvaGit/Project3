const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const generateAcccessToken = (id) => {
  const token = jwt.sign(id, secret);
  return token;
};

module.exports = { generateAcccessToken };
