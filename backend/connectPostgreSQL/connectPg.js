const Pool = require("pg").Pool;
const { slava } = require("./constants");
const connectPg = new Pool(slava);

module.exports = connectPg;
