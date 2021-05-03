const pool = require('./postgres-config');
const sql_queries = require('./sql_queries');

const call_errors = e => console.log(`the error is -> ${e}`);

exports.Query = class Query {
	constructor(mis_id,misname,manuf,wiki,wsite,description){
		this._misname 	= String(misname);
		this._mis_id 	= String(mis_id);
		this._manufs 	= String(manuf);
		this._wiki		= String(wiki);
		this._wsite		= String(wsite);
		this._desc 		= String(description);
		}
	
	sendInfo(){
		sql_queries.fillTable(
			this._mis_id,
			this._misname,
			this._manufs,
			this._wiki,
			this._wsite,
			this._desc);
			}

	add_new_record(){ console.log("recording, actually not") }
	}
