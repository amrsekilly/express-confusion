var express = require('express');
var morgan = require('morgan');

// require the dishRouter module
var dishRouter = require("./dishRouter.js");

// require the promotionsRouter module
var promoRouter = require("./promoRouter.js");

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

// mounting the router modules on the URIs
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);

// serve some static resources
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
