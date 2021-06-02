const client = require('./postgres-config');
client.connect()
exports.fillTable = (mis_id,misname,manufs,wiki,wsite,desc) => {

	try {
		
		console.log(mis_id,misname,manufs,wiki,wsite);
		client.query(
			"INSERT INTO spacex_mission (id,name,manufacturer,wikipedia,website,description)"+ 
			"VALUES ('"+mis_id+"','"+misname+"','"
						+manufs+"','"+wiki+"','"+wsite+"','"+desc+"');",(err,res) => {
				if (err) { console.log("error: "+err) }
				else { console.log('data in table') }
				
				});
	}catch(e){
		console.log('error on functions file, sendInfo method');
	}
};
