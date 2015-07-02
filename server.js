var connect = require('connect');
var http = require('http');
var proxy = require('proxy-middleware');
var serveStatic = require('serve-static');
var url = require("url");

var app = connect(); // Connect is an extensible HTTP server framework for node using "plugins" known as middleware.

app.use('/api', proxy(url.parse('http://blockexplorer.com/q'))); // Set up proxy API to block explorer

app.use(serveStatic('app', {'index': ['index.html', 'index.htm']})); // Serve files out of app directory

http.createServer(app).listen(2810); //create node.js http server and listen on port