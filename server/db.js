const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       
  password: 'mysql', 
  database: 'code_of_practices'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

module.exports = db;