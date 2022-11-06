const Pool = require("PG").Pool;
const pool = new Pool({
 user : "postgres",
 password : "password",
 host : "5432",
 database : "app",
});

module.exports = pool;