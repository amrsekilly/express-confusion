var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// require the dishRouter module
var dishRouter = require("./dishRouter.js");

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/dishes',dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
