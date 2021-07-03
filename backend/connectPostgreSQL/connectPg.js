const Pool = require("pg").Pool;

const { MarinaGru } = require("./constants");
const connectPg = new Pool(MarinaGru);

module.exports = connectPg;
