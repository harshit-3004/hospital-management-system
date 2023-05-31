const { createPool } = require('mysql2');
const ck = require("ckey");

const pool = createPool({
    port : ck.DB_PORT,
    host : ck.DB_HOST,
    user : ck.DB_USER,
    password : ck.DB_PASS,
    database : ck.MYSQL_DB
});

module.exports = pool;