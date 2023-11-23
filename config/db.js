const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log("Error connecting to the database:", err.message);
    return;
  } else {
    console.log("Database connected successfully!");
  }
});

module.exports = pool;
