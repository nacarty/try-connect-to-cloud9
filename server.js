var express = require('express');
var app = express();
var path = '/';

app.get(path, function(request, response){
  response.send('Hello World, my dear lovely lady of the West Indies..any old thing I can write...');
  //Could have used:
  // response.write('Hello World'); response.end();
  // or response.end('Hello World');
  
} );

app.listen(8080, function(err){
  if (err)
     throw err;
     
  console.log('The server is listening on port 8080...');
})