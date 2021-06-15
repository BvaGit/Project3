const Pool = require('pg').Pool;
const connectPg = new Pool({
    user: "postgres",
    password: "1111",
    host: "localhost",
    port: 5432,
    database: "blabber"
}) 

module.exports = connectPg;