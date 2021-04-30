const pool = require('postgres-config');
const sql_queries = require('sql_queries');

const call_errors = e => console.log(`the error is -> ${e}`);

exports.dbqueries = class dbqueries {
	constructor(misname,misid,manu,pay){
		this.misname = misname.toString();
		this.misid = misid.toString();
		this.manu = manu.toString();
		this.pay = pay;
		
		this.table = 'spacex_mission';
	}
	
	sendInfo(){

		let manufac = this.manu[0];
		let fpay = this.pay[0];
		let spay = this.pay[1];

		let res = sql_queries.fillTable(this.misid,this.misname, manufac,fpay,spay);
		console.log(res.rows);
	}

}
