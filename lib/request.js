var queryString = require('query-string');

function request(req){
	
	req.query = function(key){
		var search = req.url.split('?')[1];
		var parsed = queryString.parse(search);
		return parsed[key];
	}
	
	return req;
}

module.exports= request;
