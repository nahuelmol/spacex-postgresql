const expect = require('chai').expect;
const testing = require('../index');

describe("Test cases: ", () => {
	it("Specific testing: ",()=>{
		result = testing.anyFunctionOfIndex(sendSomeThing);
		//Sending something to the function will be evaluate
		//we recieve a result to be analized as follow
		finalResult =  result.expect.to.be.a('string');
	});
});
