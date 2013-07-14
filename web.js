var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

fs.readFile('index.html',function(err, data){
    buf= new Buffer(data);
    console.log(buf.toString());
})
app.get('/', function(request, response) {
     response.send("Hello World from index.html");
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
