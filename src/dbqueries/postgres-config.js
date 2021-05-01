const { Client } = require('pg');

const db_config = {
	user:'postgres',
	port:'5432',
	host:'localhost',
	database:'postdb'
}

const client = new Client(db_config);

module.exports = client;

