const { Pool } = require('pg');

const db_config = {
	user:'postgres',
	port:'5432',
	host:'localhost',
	database:'postdb'
}

const pool = new Pool(db_config);

module.exports = pool;

