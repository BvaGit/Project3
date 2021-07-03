const Pool = require("pg").Pool;
<<<<<<< HEAD
const { marina } = require("./constants");
const connectPg = new Pool(marina);
=======
const { andrey } = require("./constants");
const connectPg = new Pool(andrey);
>>>>>>> 795384714ca784b2a6f9c250846bb6fe2979c0d6

module.exports = connectPg;
