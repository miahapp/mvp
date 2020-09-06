require("dotenv").config();

// Postgres connection
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.user,
  host: process.env.DB_host,
  database: process.env.DB_database,
  password: process.env.DB_password,
  port: process.env.DB_port,
});
