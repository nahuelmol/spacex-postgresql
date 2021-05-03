const request = require('request');
const config = require('./config/config');
const { Query } = require('./dbqueries/functions');

const options = {
    url:config.url,
    headers:{
        'Acept':'aplication/json',
        'Content-Type':'aplication/json'
    }
}

const requesting_missions_info = () => {
	request.get(options,(e,res,data) => {
    	const {statusCode, headers} = res;
    	console.log("Status: "+statusCode);
    	if(statusCode == '200'){
        	try{
				const result = JSON.parse(data);
				const lim = result.length;
					for(i=0;i < lim ;i++){
						const misname 	= result[i].mission_name;
						const mis_id 	= result[i].mission_id;
						const manuf 	= result[i].manufacturers;
						const wiki		= result[i].wikipedia;
						const wsite		= result[i].website;
						const desc		= result[i].description;

						const consult = new Query(mis_id,misname,manuf,wiki,wsite,desc);
						consult.sendInfo();
						};
					console.log(`Total missions: ${i}`);
				}catch(err){console.log("An error at the 'try' section" + err)}
    		}
		})
}

exports.requesting_missions_info = requesting_missions_info;

