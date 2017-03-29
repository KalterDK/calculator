'use strict';

var express = require('express'); // Get the module
var app = express(); // Create express by calling the prototype in var express
var http = require('http').Server(app);

app.use(express.static('./'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

http.listen(8080, function(){
  console.log('Server running on 8080');
});


//const http = require('http');
//http.createServer( function(requset, response){
//    response.writeHead(200, {'Content-Type': 'text/html'});
//    response.write('index.html');
//    response.end();
//}).listen(8080);
//console.log('Server running on 8080');
