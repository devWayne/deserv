function response(res) {

    res.json = function(val) {
        res.setHeader("Content-Type", "application/json");
        var body = JSON.stringify(val);
        res.end(body);
    }

    res.jsonp = function(val, callback) {

        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Content-Type', 'text/javascript');

        // restrict callback charset
        callback = callback.replace(/[^\[\]\w$.]/g, '');
	var body = JSON.stringify(val);

        // replace chars not allowed in JavaScript that are in JSON
        body = body
            .replace(/\u2028/g, '\\u2028')
            .replace(/\u2029/g, '\\u2029');


        var body = callback + '(' + body + ');'
        res.end(body);
    }

    return res;


}

module.exports = response;
