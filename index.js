var express = require('express');
var app = express();

// var things = require('./things.js');

// app.use('/things', things);

// app.get('/:id', function(req, res){
//    res.send('The id you specified is ' + req.params.id);
// });

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

app.listen(3000);