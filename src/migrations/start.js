const client = require('../dbqueries/postgres-config');

class SpacexMission {
	constructor (new_name,type){
		this._new_name 	= new_name;
		this._type		= type;
	}

	createTable() {
		client.connect()
		client.query(`CREATE TABLE spacex_mission (
			id				serial PRIMARY KEY UNIQUE NOT NULL,
			name 			VARCHAR(50) NOT NULL,
			manufacturer	VARCHAR(50) NOT NULL,
			wikipedia		VARCHAR(50),
			website			VARCHAR(50),
			descrption		VARCHAR(150)
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

missing = new SpacexMission('Carl','Sanchez');
missing.createTable();