const request = require('request');
const config = require('./config/config');
const Queries = require('./dbqueries/functions');

const options = {
    url:config.url,
    headers:{
        'Acept':'aplication/json',
        'Content-Type':'aplication/json'
    }
}

request.get(options,(e,res,data) => {

    	const {statusCode, headers} = res;
    	console.log("Stauts: "+statusCode);
    
    	if(statusCode == '200'){
        	try{
			
			let result = JSON.parse(data);
			let lim = result.length;

			for(i=0;i < lim ;i++){
				console.log(result[i].mission_name);
				console.log(result[i].mission_id);
				console.log(result[i].manufacturers);
				console.log(result[i].payload_ids);

				let misname = result[i].mission_name;
				let misid = result[i].mission_id;
				let manu = result[i].manufacturers;
				let pay = result[i].payload_ids;

				let consult = new Queries(misname,misid,manu,pay);

				let consult.sendInfo();

			};
			console.log(`Total missions: ${i}`);
		
		}catch(err){
            		console.log("An error at the 'try' section" + err);
        	}
    	}
})
