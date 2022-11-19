const { Pool } = require('pg')
const pool = new Pool({
  user: 'book-app',
  host: 'localhost',
  database: 'book-app-db',
  password: 'password',
  port: 5432,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
