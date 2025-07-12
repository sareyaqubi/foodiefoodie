// const { Pool } = require('pg');
// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// module.exports = pool;
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'foodie_hub',
});

module.exports = pool;