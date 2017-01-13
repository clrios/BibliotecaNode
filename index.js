var cool = require('cool-ascii-faces')
var express = require('express')
var app = express()
var mongoose = require('mongoose')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

// DB Connection
mongoose.connect(process.env.MONGODB_URI)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!')
});

var Cat = mongoose.model('Cat', { name: String, createdAt: Date });
var kitty = new Cat({ name: 'Zildjian', createdAt: new Date() });

kitty.save(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

