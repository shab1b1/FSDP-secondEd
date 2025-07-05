const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',       // <--- CHANGE THIS
  password: 'your_mysql_password', // <--- CHANGE THIS
  database: 'cop_db'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

module.exports = db;