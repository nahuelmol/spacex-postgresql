const client = require('../dbqueries/postgres-config');

class SpacexMission {
	constructor (new_name,type){
		this._new_name 	= new_name;
		this._type		= type;
	}

	createTable() {
		client.connect()
		client.query(`CREATE TABLE spacex_mission (
			id				VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
			name 			VARCHAR(50) NOT NULL,
			manufacturer	text NOT NULL,
			wikipedia		text,
			website			text,
			description		text
		);`,(err,res) => {
			if (err) { console.log(err) }
			else { console.log('table created') }
			client.end();
		});
	}

	dropTable(){
		client.connect()
		client.query(`DROP TABLE spacex_mission;`,(err,res) =>{
			if (err){ console.log(err) }
			else { console.log('table droped') }
			client.end();
		})
	}

	update_info(){
		pool.query(`UPDATE spacex_mission
				SET
					name 			VARCHAR(50) NOT NULL,
					manufacturer	VARCHAR(50) NOT NULL,
					wikipedia		VARCHAR(50),
					website			VARCHAR(50),
					descrption		VARCHAR(150),
				WHERE 
					id::integer = ${_id};`)
	}
	addColumn (){
		pool.query(
			 `ALTER TABLE spacex_mission 
			  ADD COLUMN ${_new_name} ${_type};`);
	}

	deleteColumn (){
		pool.query(
			`ALTER TABLE spacex_mission 
			 DROP COLUMN ${_new_name};`);
	}
}

spacex_table = new SpacexMission();

//function menu(){
//	console.log("Choose a table\n");
//	console.log("1:spacex_table\n");
//	const table;
//
//	case(table){
//		'1':table_actions('spacex_table');
//	}
//}
//function table_actions(table_name){
//	int opt = 0;
//	console.log("Choose an action for that table:\n");
//	console.log(`1:create ${table_name} table\n`);
//	console.log(`2:drop ${table_name} table\n`);
//	console.log("3:delete column\n");
//	console.log("4:add column\n");
//	case(opt){
//		1:spacex_table.createTable();
//		2:spacex_table.dropTable();
//		3:spacex_table.deleteColumn();
//		4:spacex_table.addColumn();
//	}
//}
spacex_table.createTable()