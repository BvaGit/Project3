const Pool = require("pg").Pool;
// const { deploy } = require("./constants");
// const connectPg = new Pool(deploy);
const { MarinaGru } = require("./constants");
const connectPg = new Pool(MarinaGru);

module.exports = connectPg;
