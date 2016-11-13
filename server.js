var express = require('express');
var app = express();

//app.listen(3000);

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});

app.get('/', function(request, response) {
    response.send("Hello Christian!");
});