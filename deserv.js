var connect = require('connect')    ,
    connectRoute = require('connect-route');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');


var _request = require('./lib/request');
var _response = require('./lib/response');
var mock = require('./lib/mock');

var deserv = connect();

deserv.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

deserv.use(connectRoute(function (router) {
    router.get('/mock/json/:id', function (req, res, next) {
	 var val = mock(req.params.id);
         _response(res).json(val);
    });

    router.post('/mock/json/:id', function (req, res, next) {
        _response(res).json('POST to home');
    });

    router.get('/mock/jsonp/:id', function (req, res, next) {
	 var val = mock(req.params.id);
	 var callback = _request(req).query('callback');
         _response(res).jsonp(val,callback);
    });

}));

deserv.use(serveStatic(process.cwd(), {'index': ['index.html']}));
deserv.use(serveIndex(process.cwd(), {'icons': true}));

module.exports = deserv;
