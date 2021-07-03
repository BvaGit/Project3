const Pool = require("pg").Pool;
const { andrey } = require("./constants");
const connectPg = new Pool(andrey);

module.exports = connectPg;
