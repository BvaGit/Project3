const Pool = require("pg").Pool;
// const { deploy } = require("./constants");
// const connectPg = new Pool(deploy);
const { marina } = require("./constants");
const connectPg = new Pool(marina);

module.exports = connectPg;
