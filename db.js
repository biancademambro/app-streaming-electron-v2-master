const mysql = require('mysql2/promise');

const database = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'plataforma_streaming'
})

module.exports = database;