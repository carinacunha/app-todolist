const mysql = require('mysql2/promise'); 

const connection = mysql.createPool({ 
  port: 3306, 
  user: 'root',
  password: '123456',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;