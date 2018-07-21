var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');//处理cookie的

var Users = []

function person(name,pass){
	this.name = name;
	this.password = pass;
	this.history = [[],[],[]];
}

function record(time,correct,energy){
	this.time = time;
	this.correctness = correct;
	this.triedness = energy;
}

app.use(bodyParser.json());
app.use(cookieParser());
app.use(function(req, res, next){
  if(!req.cookies.identifier){//给用户塞cookie
    res.cookie('identifier', Math.random(), {maxAge: 1000 * 60 * 60 * 24 * 7});
    res.send("<script type='text/javascript'>location.reload()</script>")//塞完以后重新加载一下
  }
  else{//然后不加载其他的网页了
    next();
  }
});
app.use('/', express.static(__dirname));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.post('/endpoint', function(req, res){
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});





