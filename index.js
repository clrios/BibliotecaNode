var http = require('http')
var cool = require('cool-ascii-faces');
var express = require('express');
var index = express();


http.createServer(function (request, response){
	response.writeHead(200,{"Content-Type": "text/plain"})
	response.end("Hello World\n")
})

index.set('port', (process.env.PORT || 5000));

index.use(express.static(__dirname + '/public'));

// views is directory for all template files
index.set('views', __dirname + '/views');
index.set('view engine', 'ejs');

index.get('/', function(request, response) {
  response.render('pages/index');
});

index.listen(index.get('port'), function() {
  console.log('Node app is running on port', index.get('port'));
  console.log(process.env.BIENVENIDA);
});

