const Pool = require("pg").Pool;

const { MarinaGru } = require("./constants");
const connectPg = new Pool(MarinaGru);

// const { marina } = require("./constants");
// const connectPg = new Pool(marina);

// const { slava } = require("./constants");
// const connectPg = new Pool(slava);


module.exports = connectPg;
