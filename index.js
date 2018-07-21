var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');//处理cookie的

var Users = []

function person(name,pass,id){
	this.name = name;
	this.password = pass;
	this.id = id;
	this.history = [[],[],[]];
}



var hasExisted = function(string){
  for (var i = 0; i < User.length; i++) {
    if(User[i].id == string){ //检查User大列表里是否有匹配的名字
      return User[i];
    }
  }
}

app.use(bodyParser.json());
app.use(cookieParser());
app.use(function(req, res, next){
  console.log(req.cookies.identifier);
  if(!req.cookies.identifier){//给用户塞cookie
    res.cookie('identifier', Math.random(), {maxAge: 1000 * 60 * 60 * 24 * 7});
    res.send("<script type='text/javascript'>location.reload()</script>")//塞完以后重新加载一下
  	console.log(233);
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

app.post('/register', function(req, res){
	console.log('register: ' + JSON.stringify(req.body));
	var name = req.body.name;
	var pass = req.body.pass;
	var id = req.cookies.identifier;
	var name = new person(name, pass, id);
	Users.append(name);
});


app.post('/endpoint', function(req, res){
	console.log('body: ' + JSON.stringify(req.body));
	var id = req.cookies.identifier;
	var obj = hasExisted(id);
	var data = req.body;
	var formfill = [[语文1,语文2,语文3],[英语1,英语2,英语3],[数学1,数学2,数学3]];
	obj.history[data.choice1 - 1].append({
		type = formfill[data.choice2 - 1],
		correctness = none,
		tiredness = none,
		msg = none
	});
});






