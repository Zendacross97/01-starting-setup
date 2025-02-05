const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bank',
    password: 'Tomal@1997'
    });
module.exports = pool.promise();
