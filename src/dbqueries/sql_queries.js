const pool = require('postgres-config');

exports.fillTable = () => {

	try {
		const res = await pool.query(` insert into spacex_mission values ( ${misid} ,${misname} ); `);
		return res;

	}catch(e){
		console.log(`error on functions file, sendInfo method`);
	}
}
