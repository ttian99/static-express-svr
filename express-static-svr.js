var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var dir = '/dist';

// 判断文件路径是否存在
if (!fs.existsSync(__dirname + dir)) {
	fs.mkdirSync(__dirname + dir);
}

app.use('/', express.static(__dirname + dir));

http.createServer(app).listen('80', function() {
	console.log('-- http server start at: 80 --');
})