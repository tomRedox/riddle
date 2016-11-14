// Express server intended to be used for serving up a web
// page where people can enter their answer to the riddle

var express = require('express');
var app = express();

//app.listen(3000);

var portNo = 3000
app.listen(portNo, '0.0.0.0', function() {
    console.log('Listening to port:  ' + portNo);
});

app.get('/', function(request, response) {
    response.send("Hello Christian!");
});