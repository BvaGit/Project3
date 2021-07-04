const Pool = require("pg").Pool;
const { deploy } = require("./constants");
const connectPg = new Pool(deploy);

module.exports = connectPg;
