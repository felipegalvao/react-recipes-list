var express = require('express');
const path = require('path')

// Create our app
var app = express();
const PORT = 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);    
  } else {
    next();
  }
});

app.use(express.static('public'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});