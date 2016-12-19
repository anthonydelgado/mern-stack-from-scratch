var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    // res.send('Hello World!');
    res.sendFile('/public/index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});