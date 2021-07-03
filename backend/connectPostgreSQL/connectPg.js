const Pool = require("pg").Pool;
const { marina } = require("./constants");
const connectPg = new Pool(marina);

module.exports = connectPg;
