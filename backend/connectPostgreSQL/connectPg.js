const Pool = require("pg").Pool;

const { MarinaGru } = require("./constants");
const connectPg = new Pool(MarinaGru);

// const { marina } = require("./constants");
// const connectPg = new Pool(marina);


module.exports = connectPg;
